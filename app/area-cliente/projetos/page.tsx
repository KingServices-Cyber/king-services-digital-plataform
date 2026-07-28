"use client";

import { useCallback, useEffect, useState } from "react";
import { usePortalSession } from "@/components/portal/PortalSessionContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { formatDateBR } from "@/lib/portal-format";
import type { Database } from "@/lib/database.types";

type Project = Database["public"]["Tables"]["projects"]["Row"];

const STATUS_LABEL: Record<string, string> = {
  planned: "Planejado",
  in_progress: "Em andamento",
  completed: "Concluído",
  on_hold: "Em espera",
};

const STATUS_BADGE: Record<string, string> = {
  planned: "bg-blue-100 text-blue-800",
  in_progress: "bg-amber-100 text-amber-800",
  completed: "bg-green-100 text-green-800",
  on_hold: "bg-gray-100 text-gray-700",
};

export default function ProjetosPage() {
  const { userId } = usePortalSession();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error: fetchError } = await supabase
        .from("projects")
        .select("*")
        .eq("client_id", userId)
        .order("created_at", { ascending: false });
      if (fetchError) throw fetchError;
      setProjects(data ?? []);
    } catch (err) {
      console.error("Erro ao carregar projetos:", err);
      setError("Não foi possível carregar os projetos.");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-purple-900 mb-4">Projetos</h2>

      {error && (
        <p className="text-[13px] text-[#C0392B] bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-graphite/60 py-10 text-center">Carregando projetos...</p>
      ) : projects.length === 0 ? (
        <p className="text-graphite/60 py-10 text-center border border-fog rounded-card">
          Nenhum projeto em andamento ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="border border-fog rounded-card bg-white p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display font-semibold text-graphite">{p.name}</h3>
                <span
                  className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-pill ${
                    STATUS_BADGE[p.status] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {STATUS_LABEL[p.status] ?? p.status}
                </span>
              </div>
              {p.description && <p className="text-sm text-graphite/70 mb-3">{p.description}</p>}

              <div className="mb-2">
                <div className="h-2 rounded-pill bg-mist overflow-hidden">
                  <div
                    className="h-full rounded-pill bg-gradient-to-r from-purple-600 to-lilac-500"
                    style={{ width: `${p.progress_pct}%` }}
                  />
                </div>
                <p className="text-xs text-graphite/60 mt-1">{p.progress_pct}% concluído</p>
              </div>

              <p className="text-xs text-graphite/60">
                Início: {formatDateBR(p.started_at)} · Previsão: {formatDateBR(p.expected_end_at)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
