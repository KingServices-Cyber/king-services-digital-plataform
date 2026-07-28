"use client";

import { useCallback, useEffect, useState } from "react";
import { usePortalSession } from "@/components/portal/PortalSessionContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { formatCurrencyBRL, formatDateBR } from "@/lib/portal-format";
import type { Database } from "@/lib/database.types";

type Invoice = Database["public"]["Tables"]["invoices"]["Row"];

const STATUS_LABEL: Record<string, string> = {
  pending: "Pendente",
  paid: "Paga",
  overdue: "Vencida",
  cancelled: "Cancelada",
};

const STATUS_BADGE: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  paid: "bg-green-100 text-green-800",
  overdue: "bg-red-100 text-red-800",
  cancelled: "bg-gray-100 text-gray-700",
};

export default function FaturasPage() {
  const { userId } = usePortalSession();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error: fetchError } = await supabase
        .from("invoices")
        .select("*")
        .eq("client_id", userId)
        .order("reference_month", { ascending: false });
      if (fetchError) throw fetchError;
      setInvoices(data ?? []);
    } catch (err) {
      console.error("Erro ao carregar faturas:", err);
      setError("Não foi possível carregar as faturas.");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-purple-900 mb-4">Faturas</h2>

      {error && (
        <p className="text-[13px] text-[#C0392B] bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-graphite/60 py-10 text-center">Carregando faturas...</p>
      ) : invoices.length === 0 ? (
        <p className="text-graphite/60 py-10 text-center border border-fog rounded-card">
          Nenhuma fatura emitida ainda.
        </p>
      ) : (
        <div className="overflow-x-auto border border-fog rounded-card">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-mist text-left text-graphite/70 text-xs uppercase tracking-wide">
                <th className="px-3 py-3 font-semibold">Referência</th>
                <th className="px-3 py-3 font-semibold">Valor</th>
                <th className="px-3 py-3 font-semibold">Vencimento</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Fatura</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-t border-fog align-top">
                  <td className="px-3 py-3 text-graphite whitespace-nowrap">
                    {formatDateBR(inv.reference_month)}
                  </td>
                  <td className="px-3 py-3 text-graphite/80 whitespace-nowrap">
                    {formatCurrencyBRL(inv.amount)}
                  </td>
                  <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                    {formatDateBR(inv.due_date)}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-pill ${
                        STATUS_BADGE[inv.status] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {STATUS_LABEL[inv.status] ?? inv.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {inv.invoice_url ? (
                      <a
                        href={inv.invoice_url}
                        target="_blank"
                        rel="noopener"
                        className="text-purple-700 font-semibold hover:underline"
                      >
                        Abrir PDF
                      </a>
                    ) : (
                      <span className="text-graphite/40">—</span>
                    )}
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
