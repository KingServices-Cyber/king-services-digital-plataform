"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { Database } from "@/lib/database.types";

type Lead = Database["public"]["Tables"]["leads"]["Row"];

type StatusOption = { value: string; label: string; badge: string };

const STATUS_OPTIONS: StatusOption[] = [
  { value: "new", label: "Novo", badge: "bg-purple-100 text-purple-800" },
  { value: "contacted", label: "Contatado", badge: "bg-blue-100 text-blue-800" },
  { value: "qualified", label: "Qualificado", badge: "bg-amber-100 text-amber-800" },
  { value: "won", label: "Ganho", badge: "bg-green-100 text-green-800" },
  { value: "lost", label: "Perdido", badge: "bg-red-100 text-red-800" },
];

const STATUS_LABEL = Object.fromEntries(STATUS_OPTIONS.map((s) => [s.value, s.label]));
const STATUS_BADGE = Object.fromEntries(STATUS_OPTIONS.map((s) => [s.value, s.badge]));

function formatDate(value: string): string {
  return new Date(value).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminLeadsPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [savingId, setSavingId] = useState<string | null>(null);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error: fetchError } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
      setLeads(data ?? []);
    } catch (err) {
      console.error("Erro ao carregar leads:", err);
      setError("Não foi possível carregar os leads.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Guarda de sessão: sem autenticação, redireciona para o login.
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!active) return;
        if (!session) {
          router.replace("/login");
          return;
        }
        setUserEmail(session.user.email ?? null);
        setCheckingAuth(false);
        void loadLeads();
      } catch (err) {
        console.error("Erro ao verificar sessão:", err);
        router.replace("/login");
      }
    })();
    return () => {
      active = false;
    };
  }, [router, loadLeads]);

  async function handleStatusChange(lead: Lead, newStatus: string) {
    const previous = lead.status;
    setSavingId(lead.id);
    // Atualização otimista
    setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, status: newStatus } : l)));
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: updateError } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", lead.id);
      if (updateError) throw updateError;
    } catch (err) {
      console.error("Erro ao atualizar status:", err);
      // Reverte em caso de erro
      setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, status: previous } : l)));
      setError("Não foi possível atualizar o status. Tente novamente.");
    } finally {
      setSavingId(null);
    }
  }

  async function handleLogout() {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.replace("/login");
  }

  const filteredLeads = useMemo(
    () => (filter === "all" ? leads : leads.filter((l) => l.status === filter)),
    [leads, filter],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of leads) map[l.status] = (map[l.status] ?? 0) + 1;
    return map;
  }, [leads]);

  if (checkingAuth) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-graphite/70">
        Verificando acesso...
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="font-display font-semibold text-[clamp(20px,3vw,26px)] text-purple-900">
            Painel de Leads
          </h1>
          {userEmail && <p className="text-sm text-graphite/60">Conectado como {userEmail}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => void loadLeads()}
            className="text-sm font-semibold px-4 py-2 rounded-pill border-[1.5px] border-purple-600 text-purple-700 hover:bg-mist"
          >
            Atualizar
          </button>
          <button
            onClick={() => void handleLogout()}
            className="text-sm font-semibold px-4 py-2 rounded-pill bg-graphite text-white hover:opacity-90"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Filtros por status */}
      <div className="flex flex-wrap gap-2 mb-5">
        <FilterChip
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={`Todos (${leads.length})`}
        />
        {STATUS_OPTIONS.map((s) => (
          <FilterChip
            key={s.value}
            active={filter === s.value}
            onClick={() => setFilter(s.value)}
            label={`${s.label} (${counts[s.value] ?? 0})`}
          />
        ))}
      </div>

      {error && (
        <p className="text-[13px] text-[#C0392B] bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-graphite/60 py-10 text-center">Carregando leads...</p>
      ) : filteredLeads.length === 0 ? (
        <p className="text-graphite/60 py-10 text-center border border-fog rounded-card">
          Nenhum lead {filter === "all" ? "cadastrado ainda" : `com status "${STATUS_LABEL[filter]}"`}.
        </p>
      ) : (
        <div className="overflow-x-auto border border-fog rounded-card">
          <table className="w-full text-sm border-collapse min-w-[820px]">
            <thead>
              <tr className="bg-mist text-left text-graphite/70 text-xs uppercase tracking-wide">
                <th className="px-3 py-3 font-semibold">Recebido</th>
                <th className="px-3 py-3 font-semibold">Nome</th>
                <th className="px-3 py-3 font-semibold">Contato</th>
                <th className="px-3 py-3 font-semibold">Documento</th>
                <th className="px-3 py-3 font-semibold">Mensagem</th>
                <th className="px-3 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-t border-fog align-top">
                  <td className="px-3 py-3 whitespace-nowrap text-graphite/70">
                    {formatDate(lead.created_at)}
                  </td>
                  <td className="px-3 py-3 font-semibold text-graphite">{lead.name}</td>
                  <td className="px-3 py-3 text-graphite/80">
                    {lead.email && <div>{lead.email}</div>}
                    {lead.phone && <div className="text-graphite/60">{lead.phone}</div>}
                  </td>
                  <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                    {lead.doc ? (
                      <span>
                        <span className="uppercase text-graphite/50 text-xs">{lead.doc_type}</span> {lead.doc}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-3 py-3 text-graphite/80 max-w-[280px]">{lead.message || "—"}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="flex flex-col gap-1.5">
                      <span
                        className={`inline-block w-fit text-xs font-semibold px-2 py-0.5 rounded-pill ${
                          STATUS_BADGE[lead.status] ?? "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {STATUS_LABEL[lead.status] ?? lead.status}
                      </span>
                      <select
                        value={lead.status}
                        disabled={savingId === lead.id}
                        onChange={(e) => void handleStatusChange(lead, e.target.value)}
                        className="border border-fog rounded-lg px-2 py-1.5 text-sm bg-white disabled:opacity-60"
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-semibold px-3.5 py-1.5 rounded-pill border transition-colors ${
        active
          ? "bg-purple-600 text-white border-purple-600"
          : "bg-white text-graphite/70 border-fog hover:bg-mist"
      }`}
    >
      {label}
    </button>
  );
}
