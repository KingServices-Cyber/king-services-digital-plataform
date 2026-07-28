"use client";

import { useCallback, useEffect, useState } from "react";
import { usePortalSession } from "@/components/portal/PortalSessionContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { formatDateBR } from "@/lib/portal-format";
import type { Database } from "@/lib/database.types";

type Document = Database["public"]["Tables"]["documents"]["Row"];

const CATEGORY_LABEL: Record<string, string> = {
  contract: "Contrato",
  invoice: "Fatura",
  report: "Relatório",
  other: "Outro",
};

export default function DocumentosPage() {
  const { userId } = usePortalSession();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error: fetchError } = await supabase
        .from("documents")
        .select("*")
        .eq("client_id", userId)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
      setDocuments(data ?? []);
    } catch (err) {
      console.error("Erro ao carregar documentos:", err);
      setError("Não foi possível carregar os documentos.");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-purple-900 mb-4">Documentos</h2>

      {error && (
        <p className="text-[13px] text-[#C0392B] bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-graphite/60 py-10 text-center">Carregando documentos...</p>
      ) : documents.length === 0 ? (
        <p className="text-graphite/60 py-10 text-center border border-fog rounded-card">
          Nenhum documento disponível ainda.
        </p>
      ) : (
        <div className="overflow-x-auto border border-fog rounded-card">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead>
              <tr className="bg-mist text-left text-graphite/70 text-xs uppercase tracking-wide">
                <th className="px-3 py-3 font-semibold">Título</th>
                <th className="px-3 py-3 font-semibold">Categoria</th>
                <th className="px-3 py-3 font-semibold">Adicionado em</th>
                <th className="px-3 py-3 font-semibold">Arquivo</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-t border-fog align-top">
                  <td className="px-3 py-3 font-semibold text-graphite">{doc.title}</td>
                  <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                    {CATEGORY_LABEL[doc.category] ?? doc.category}
                  </td>
                  <td className="px-3 py-3 text-graphite/70 whitespace-nowrap">
                    {formatDateBR(doc.created_at)}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener"
                      className="text-purple-700 font-semibold hover:underline"
                    >
                      Abrir
                    </a>
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
