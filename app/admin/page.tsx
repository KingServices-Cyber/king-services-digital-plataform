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

const PAGE_SIZE = 15;

function formatDate(value: string): string {
  return new Date(value).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function statusLabel(status: string): string {
  return STATUS_LABEL[status] ?? status;
}

function exportLeadsToCsv(rows: Lead[]) {
  const header = [
    "Recebido",
    "Nome",
    "E-mail",
    "Telefone",
    "Tipo Documento",
    "Documento",
    "Mensagem",
    "Origem",
    "Status",
  ];
  const escape = (value: string | null) => `"${(value ?? "").replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [
      formatDate(r.created_at),
      r.name,
      r.email,
      r.phone,
      r.doc_type,
      r.doc,
      r.message,
      r.source,
      statusLabel(r.status),
    ]
      .map((v) => escape(v == null ? "" : String(v)))
      .join(";"),
  );
  // BOM (﻿) para o Excel reconhecer UTF-8 (acentos).
  const csv = "﻿" + [header.join(";"), ...lines].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminLeadsPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Lead | null>(null);

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
    setSelected((cur) => (cur && cur.id === lead.id ? { ...cur, status: newStatus } : cur));
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: updateError } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", lead.id);
      if (updateError) throw updateError;
    } catch (err) {
      console.error("Erro ao atualizar status:", err);
      setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, status: previous } : l)));
      setSelected((cur) => (cur && cur.id === lead.id ? { ...cur, status: previous } : cur));
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

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of leads) map[l.status] = (map[l.status] ?? 0) + 1;
    return map;
  }, [leads]);

  const filteredLeads = useMemo(() => {
    const term = search.trim().toLowerCase();
    return leads.filter((l) => {
      if (filter !== "all" && l.status !== filter) return false;
      if (!term) return true;
      const haystack = [l.name, l.email, l.phone, l.doc, l.message].filter(Boolean).join(" ").toLowerCase();
      return haystack.includes(term);
    });
  }, [leads, filter, search]);

  // Volta para a primeira página quando filtro/busca mudam.
  useEffect(() => {
    setPage(1);
  }, [filter, search]);

  const totalPages = Math.max(1, Math.ceil(filteredLeads.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageLeads = filteredLeads.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

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
            onClick={() => exportLeadsToCsv(filteredLeads)}
            disabled={filteredLeads.length === 0}
            className="text-sm font-semibold px-4 py-2 rounded-pill border-[1.5px] border-purple-600 text-purple-700 hover:bg-mist disabled:opacity-40"
          >
            Exportar CSV
          </button>
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

      {/* Busca */}
      <div className="mb-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome, e-mail, telefone, documento ou mensagem..."
          className="w-full max-w-[520px] border border-fog rounded-lg px-3 py-2.5 text-sm"
        />
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
          {leads.length === 0
            ? "Nenhum lead cadastrado ainda."
            : "Nenhum lead corresponde aos filtros aplicados."}
        </p>
      ) : (
        <>
          <div className="overflow-x-auto border border-fog rounded-card">
            <table className="w-full text-sm border-collapse min-w-[820px]">
              <thead>
                <tr className="bg-mist text-left text-graphite/70 text-xs uppercase tracking-wide">
                  <th className="px-3 py-3 font-semibold">Recebido</th>
                  <th className="px-3 py-3 font-semibold">Nome</th>
                  <th className="px-3 py-3 font-semibold">Contato</th>
                  <th className="px-3 py-3 font-semibold">Documento</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {pageLeads.map((lead) => (
                  <tr key={lead.id} className="border-t border-fog align-top">
                    <td className="px-3 py-3 whitespace-nowrap text-graphite/70">
                      {formatDate(lead.created_at)}
                    </td>
                    <td className="px-3 py-3">
                      <button
                        onClick={() => setSelected(lead)}
                        className="font-semibold text-purple-700 hover:underline text-left"
                      >
                        {lead.name}
                      </button>
                    </td>
                    <td className="px-3 py-3 text-graphite/80">
                      {lead.email && <div>{lead.email}</div>}
                      {lead.phone && <div className="text-graphite/60">{lead.phone}</div>}
                    </td>
                    <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                      {lead.doc ? (
                        <span>
                          <span className="uppercase text-graphite/50 text-xs">{lead.doc_type}</span>{" "}
                          {lead.doc}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex flex-col gap-1.5">
                        <span
                          className={`inline-block w-fit text-xs font-semibold px-2 py-0.5 rounded-pill ${
                            STATUS_BADGE[lead.status] ?? "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {statusLabel(lead.status)}
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

          {/* Paginação */}
          <div className="flex items-center justify-between gap-3 mt-4 text-sm">
            <p className="text-graphite/60">
              Mostrando {(currentPage - 1) * PAGE_SIZE + 1}–
              {Math.min(currentPage * PAGE_SIZE, filteredLeads.length)} de {filteredLeads.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="px-3 py-1.5 rounded-lg border border-fog disabled:opacity-40 hover:bg-mist"
              >
                Anterior
              </button>
              <span className="text-graphite/70">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className="px-3 py-1.5 rounded-lg border border-fog disabled:opacity-40 hover:bg-mist"
              >
                Próxima
              </button>
            </div>
          </div>
        </>
      )}

      {selected && (
        <LeadDetail
          lead={selected}
          saving={savingId === selected.id}
          onClose={() => setSelected(null)}
          onStatusChange={(status) => void handleStatusChange(selected, status)}
        />
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

function LeadDetail({
  lead,
  saving,
  onClose,
  onStatusChange,
}: {
  lead: Lead;
  saving: boolean;
  onClose: () => void;
  onStatusChange: (status: string) => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-graphite/50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-card w-full max-w-[520px] max-h-[85vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <h2 className="font-display font-semibold text-lg text-purple-900">{lead.name}</h2>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="text-graphite/50 hover:text-graphite text-xl leading-none"
          >
            ×
          </button>
        </div>

        <dl className="text-sm space-y-2.5">
          <DetailRow label="Recebido em" value={formatDate(lead.created_at)} />
          <DetailRow
            label="E-mail"
            value={
              lead.email ? (
                <a href={`mailto:${lead.email}`} className="text-purple-700 hover:underline">
                  {lead.email}
                </a>
              ) : (
                "—"
              )
            }
          />
          <DetailRow label="Telefone" value={lead.phone || "—"} />
          <DetailRow
            label="Documento"
            value={lead.doc ? `${(lead.doc_type ?? "").toUpperCase()} ${lead.doc}` : "—"}
          />
          <DetailRow label="Origem" value={lead.source} />
          <DetailRow label="Mensagem" value={lead.message || "—"} />
        </dl>

        <div className="mt-5 pt-4 border-t border-fog">
          <label className="block text-xs font-semibold uppercase text-graphite/60 mb-1.5">Status</label>
          <select
            value={lead.status}
            disabled={saving}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full border border-fog rounded-lg px-3 py-2 text-sm bg-white disabled:opacity-60"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-2">
      <dt className="text-graphite/50">{label}</dt>
      <dd className="text-graphite break-words">{value}</dd>
    </div>
  );
}
