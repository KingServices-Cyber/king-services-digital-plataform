"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { usePortalSession } from "@/components/portal/PortalSessionContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const PRIORITY_OPTIONS = [
  { value: "low", label: "Baixa" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "Alta" },
  { value: "urgent", label: "Urgente" },
];

const inputClass = "w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4";
const labelClass = "block text-[15px] font-medium mb-1.5";

export default function SuportePage() {
  const { userId } = usePortalSession();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!subject.trim() || !description.trim()) {
      setError("Preencha o assunto e a descrição.");
      return;
    }

    setLoading(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: insertError } = await supabase.from("tickets").insert({
        client_id: userId,
        subject: subject.trim(),
        description: description.trim(),
        priority,
      });
      if (insertError) throw insertError;
      setSuccess(true);
      setSubject("");
      setDescription("");
      setPriority("normal");
    } catch (err) {
      console.error("Erro ao abrir chamado:", err);
      setError("Não foi possível abrir o chamado agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="font-display font-semibold text-lg text-purple-900 mb-4">Suporte</h2>

      <div className="max-w-[520px] border border-fog rounded-card bg-white p-6">
        {success ? (
          <div>
            <p className="text-[15px] text-purple-700 font-semibold mb-4">
              ✓ Chamado aberto com sucesso! Nossa equipe vai analisar em breve.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/area-cliente/chamados"
                className="text-sm font-semibold px-4 py-2 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white"
              >
                Ver em Chamados
              </Link>
              <button
                onClick={() => setSuccess(false)}
                className="text-sm font-semibold text-purple-600 hover:underline"
              >
                Abrir outro chamado
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="text-sm text-graphite/60 mb-4">
              Precisa de ajuda? Descreva o problema abaixo e nossa equipe entra em contato.
            </p>

            <label className={labelClass}>Assunto *</label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />

            <label className={labelClass}>Prioridade</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={inputClass}
            >
              {PRIORITY_OPTIONS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>

            <label className={labelClass}>Descrição *</label>
            <textarea
              required
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={inputClass}
            />

            {error && <p className="text-[13px] text-[#C0392B] -mt-2 mb-4">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Abrir chamado"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
