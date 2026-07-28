"use client";

import { useCallback, useEffect, useState } from "react";
import { usePortalSession } from "@/components/portal/PortalSessionContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { formatCurrencyBRL, formatDateBR } from "@/lib/portal-format";
import type { Database } from "@/lib/database.types";

type Contract = Database["public"]["Tables"]["contracts"]["Row"];

const STATUS_LABEL: Record<string, string> = {
  active: "Ativo",
  pending: "Pendente",
  expired: "Expirado",
  cancelled: "Cancelado",
};

const STATUS_BADGE: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  pending: "bg-amber-100 text-amber-800",
  expired: "bg-gray-100 text-gray-700",
  cancelled: "bg-red-100 text-red-800",
};

export default function ContratosPage() {
  const { userId } = usePortalSession();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error: fetchError } = await supabase
        .from("contracts")
        .select("*")
        .eq("client_id", userId)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
      setContracts(data ?? []);
    } catch (err) {
      console.error("Erro ao carregar contratos:", err);
      setError("Não foi possível carregar os contratos.");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-purple-900 mb-4">Contratos</h2>

      {error && (
        <p className="text-[13px] text-[#C0392B] bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-graphite/60 py-10 text-center">Carregando contratos...</p>
      ) : contracts.length === 0 ? (
        <p className="text-graphite/60 py-10 text-center border border-fog rounded-card">
          Nenhum contrato cadastrado ainda.
        </p>
      ) : (
        <div className="overflow-x-auto border border-fog rounded-card">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-mist text-left text-graphite/70 text-xs uppercase tracking-wide">
                <th className="px-3 py-3 font-semibold">Contrato</th>
                <th className="px-3 py-3 font-semibold">Vigência</th>
                <th className="px-3 py-3 font-semibold">Valor mensal</th>
                <th className="px-3 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c) => (
                <tr key={c.id} className="border-t border-fog align-top">
                  <td className="px-3 py-3">
                    <p className="font-semibold text-graphite">{c.title}</p>
                    {c.description && <p className="text-graphite/60 text-xs mt-0.5">{c.description}</p>}
                  </td>
                  <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                    {formatDateBR(c.start_date)} – {formatDateBR(c.end_date)}
                  </td>
                  <td className="px-3 py-3 text-graphite/80 whitespace-nowrap">
                    {formatCurrencyBRL(c.monthly_value)}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-pill ${
                        STATUS_BADGE[c.status] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {STATUS_LABEL[c.status] ?? c.status}
                    </span>
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
