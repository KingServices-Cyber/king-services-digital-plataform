"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePortalSession } from "@/components/portal/PortalSessionContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Counts = {
  activeContracts: number;
  openTickets: number;
  pendingInvoices: number;
  activeProjects: number;
};

const CARDS: { key: keyof Counts; label: string; href: string }[] = [
  { key: "activeContracts", label: "Contratos ativos", href: "/area-cliente/contratos" },
  { key: "openTickets", label: "Chamados abertos", href: "/area-cliente/chamados" },
  { key: "pendingInvoices", label: "Faturas pendentes", href: "/area-cliente/faturas" },
  { key: "activeProjects", label: "Projetos em andamento", href: "/area-cliente/projetos" },
];

export default function DashboardPage() {
  const { userId } = usePortalSession();
  const [counts, setCounts] = useState<Counts | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const [contracts, tickets, invoices, projects] = await Promise.all([
          supabase
            .from("contracts")
            .select("*", { count: "exact", head: true })
            .eq("client_id", userId)
            .eq("status", "active"),
          supabase
            .from("tickets")
            .select("*", { count: "exact", head: true })
            .eq("client_id", userId)
            .in("status", ["open", "in_progress"]),
          supabase
            .from("invoices")
            .select("*", { count: "exact", head: true })
            .eq("client_id", userId)
            .eq("status", "pending"),
          supabase
            .from("projects")
            .select("*", { count: "exact", head: true })
            .eq("client_id", userId)
            .eq("status", "in_progress"),
        ]);
        if (!active) return;
        const firstError =
          contracts.error || tickets.error || invoices.error || projects.error;
        if (firstError) throw firstError;
        setCounts({
          activeContracts: contracts.count ?? 0,
          openTickets: tickets.count ?? 0,
          pendingInvoices: invoices.count ?? 0,
          activeProjects: projects.count ?? 0,
        });
      } catch (err) {
        console.error("Erro ao carregar dashboard:", err);
        setError("Não foi possível carregar o resumo agora.");
      }
    })();
    return () => {
      active = false;
    };
  }, [userId]);

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-purple-900 mb-4">Dashboard</h2>

      {error && (
        <p className="text-[13px] text-[#C0392B] bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map((card) => (
          <Link
            key={card.key}
            href={card.href}
            className="block border border-fog rounded-card bg-white p-5 hover:border-lilac-500 hover:shadow-card transition-all"
          >
            <p className="text-3xl font-display font-bold text-purple-700">
              {counts ? counts[card.key] : "—"}
            </p>
            <p className="text-sm text-graphite/70 mt-1">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
