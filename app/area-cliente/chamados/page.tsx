"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePortalSession } from "@/components/portal/PortalSessionContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { formatDateTimeBR } from "@/lib/portal-format";
import type { Database } from "@/lib/database.types";

type Ticket = Database["public"]["Tables"]["tickets"]["Row"];

const STATUS_LABEL: Record<string, string> = {
  open: "Aberto",
  in_progress: "Em andamento",
  resolved: "Resolvido",
  closed: "Fechado",
};

const STATUS_BADGE: Record<string, string> = {
  open: "bg-blue-100 text-blue-800",
  in_progress: "bg-amber-100 text-amber-800",
  resolved: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-700",
};

const PRIORITY_LABEL: Record<string, string> = {
  low: "Baixa",
  normal: "Normal",
  high: "Alta",
  urgent: "Urgente",
};

export default function ChamadosPage() {
  const { userId } = usePortalSession();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error: fetchError } = await supabase
        .from("tickets")
        .select("*")
        .eq("client_id", userId)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
      setTickets(data ?? []);
    } catch (err) {
      console.error("Erro ao carregar chamados:", err);
      setError("Não foi possível carregar os chamados.");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="font-display font-semibold text-lg text-purple-900">Chamados</h2>
        <Link
          href="/area-cliente/suporte"
          className="text-sm font-semibold px-4 py-2 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white"
        >
          Abrir novo chamado
        </Link>
      </div>

      {error && (
        <p className="text-[13px] text-[#C0392B] bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-graphite/60 py-10 text-center">Carregando chamados...</p>
      ) : tickets.length === 0 ? (
        <p className="text-graphite/60 py-10 text-center border border-fog rounded-card">
          Nenhum chamado aberto ainda.
        </p>
      ) : (
        <div className="overflow-x-auto border border-fog rounded-card">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-mist text-left text-graphite/70 text-xs uppercase tracking-wide">
                <th className="px-3 py-3 font-semibold">Assunto</th>
                <th className="px-3 py-3 font-semibold">Prioridade</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Aberto em</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id} className="border-t border-fog align-top">
                  <td className="px-3 py-3">
                    <p className="font-semibold text-graphite">{t.subject}</p>
                    <p className="text-graphite/60 text-xs mt-0.5">{t.description}</p>
                  </td>
                  <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                    {PRIORITY_LABEL[t.priority] ?? t.priority}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-pill ${
                        STATUS_BADGE[t.status] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {STATUS_LABEL[t.status] ?? t.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                    {formatDateTimeBR(t.created_at)}
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
