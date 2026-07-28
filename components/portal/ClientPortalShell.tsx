"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/design-system";
import { PortalSessionProvider } from "./PortalSessionContext";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/area-cliente" },
  { label: "Contratos", href: "/area-cliente/contratos" },
  { label: "Chamados", href: "/area-cliente/chamados" },
  { label: "Faturas", href: "/area-cliente/faturas" },
  { label: "Projetos", href: "/area-cliente/projetos" },
  { label: "Documentos", href: "/area-cliente/documentos" },
  { label: "Suporte", href: "/area-cliente/suporte" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/area-cliente") return pathname === "/area-cliente";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ClientPortalShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [session, setSession] = useState<{ userId: string; email: string | null } | null>(null);

  // Guarda de sessão: sem autenticação, redireciona para o login.
  // Não restringe por role — um admin também pode abrir a Área do Cliente
  // (só não vê linhas de ninguém, já que as tabelas são filtradas por client_id).
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const {
          data: { session: authSession },
        } = await supabase.auth.getSession();
        if (!active) return;
        if (!authSession) {
          router.replace("/login");
          return;
        }
        setSession({ userId: authSession.user.id, email: authSession.user.email ?? null });
        setCheckingAuth(false);
      } catch (err) {
        console.error("Erro ao verificar sessão:", err);
        router.replace("/login");
      }
    })();
    return () => {
      active = false;
    };
  }, [router]);

  async function handleLogout() {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.replace("/login");
  }

  if (checkingAuth || !session) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-graphite/70">
        Verificando acesso...
      </div>
    );
  }

  return (
    <PortalSessionProvider value={{ userId: session.userId, email: session.email }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="font-display font-semibold text-[clamp(20px,3vw,26px)] text-purple-900">
              Área do Cliente
            </h1>
            {session.email && <p className="text-sm text-graphite/60">Conectado como {session.email}</p>}
          </div>
          <button
            onClick={() => void handleLogout()}
            className="text-sm font-semibold px-4 py-2 rounded-pill bg-graphite text-white hover:opacity-90"
          >
            Sair
          </button>
        </div>

        {/* Navegação: linhas de pills roláveis no mobile, coluna fixa a partir de md */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <nav
            aria-label="Navegação da Área do Cliente"
            className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 md:w-52 md:shrink-0"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "shrink-0 text-sm font-semibold px-4 py-2.5 rounded-pill md:rounded-lg whitespace-nowrap transition-colors",
                    active
                      ? "bg-purple-600 text-white"
                      : "bg-white border border-fog text-graphite/70 hover:bg-mist",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </PortalSessionProvider>
  );
}
