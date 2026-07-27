"use client";

import { FormEvent, useState } from "react";
import { PageHero, WhatsAppLink } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/content";
import { mascararCPF, mascararCNPJ, mascararTelefone } from "@/lib/masks";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [docTipo, setDocTipo] = useState<"cpf" | "cnpj">("cpf");
  const [docValue, setDocValue] = useState("");
  const [telefone, setTelefone] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleDocChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDocValue(docTipo === "cpf" ? mascararCPF(e.target.value) : mascararCNPJ(e.target.value));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = getSupabaseBrowserClient();
      const { error: insertError } = await supabase.from("leads").insert({
        name: nome.trim(),
        email: email.trim(),
        phone: telefone,
        doc_type: docTipo,
        doc: docValue,
        message: mensagem.trim(),
        source: "site-contato",
        status: "new",
      });

      if (insertError) throw insertError;
      setSubmitted(true);
    } catch (err) {
      console.error("Erro ao enviar lead:", err);
      setError("Não foi possível enviar sua mensagem agora. Tente novamente ou fale conosco pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contato" title="Vamos conversar sobre a conectividade da sua empresa?" />
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Informações de contato */}
        <div>
          <span className="block text-[13px] font-bold uppercase text-[#8F58C9] mb-2">
            Fale com a King Services
          </span>

          <div className="mt-[18px] text-[19px] leading-[1.6] text-[#3A3937]">
            <p className="font-bold text-graphite mb-1.5">Central de Atendimento:</p>
            <p className="mb-2">📞 {CONTACT_INFO.phone}</p>
            <p className="mb-6 flex items-center gap-2">
              <WhatsAppLink iconOnly />
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="text-[#3A3937] no-underline"
              >
                {CONTACT_INFO.phone}
              </a>
            </p>

            <p className="font-bold text-graphite mb-1.5">✉ E-mail:</p>
            <p className="mb-6">{CONTACT_INFO.email}</p>

            <p className="font-bold text-graphite mb-1.5">📍 Escritório:</p>
            <p>
              {CONTACT_INFO.addressStreet}
              <br />
              {CONTACT_INFO.addressCity}
              <br />
              {CONTACT_INFO.addressCep}
            </p>
          </div>
        </div>

        {/* Formulário */}
        <div className="border border-fog rounded-card p-6 max-w-[460px] h-fit">
          {submitted ? (
            <p className="text-[15px] text-purple-700 font-semibold">
              ✓ Mensagem enviada! Um especialista King Services entrará em contato.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-[13px] text-[#8F58C9] -mt-1 mb-4">
                * Preenchimento obrigatório em todos os campos
              </p>

              <label className="block text-[15px] font-medium mb-1.5">Nome *</label>
              <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4"
              />

              <label className="block text-[15px] font-medium mb-1.5">E-mail *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4"
              />

              <label className="block text-[15px] font-medium mb-1.5">Tipo de documento *</label>
              <select
                required
                value={docTipo}
                onChange={(e) => {
                  setDocTipo(e.target.value as "cpf" | "cnpj");
                  setDocValue("");
                }}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4 bg-white"
              >
                <option value="cpf">CPF</option>
                <option value="cnpj">CNPJ</option>
              </select>

              <label className="block text-[15px] font-medium mb-1.5">{docTipo.toUpperCase()} *</label>
              <input
                type="text"
                inputMode="numeric"
                required
                value={docValue}
                onChange={handleDocChange}
                placeholder={docTipo === "cpf" ? "000.000.000-00" : "00.000.000/0000-00"}
                maxLength={docTipo === "cpf" ? 14 : 18}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4"
              />

              <label className="block text-[15px] font-medium mb-1.5">Celular / WhatsApp *</label>
              <input
                type="tel"
                inputMode="numeric"
                required
                value={telefone}
                onChange={(e) => setTelefone(mascararTelefone(e.target.value))}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4"
              />

              <label className="block text-[15px] font-medium mb-1.5">Mensagem *</label>
              <textarea
                required
                rows={3}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4"
              />

              {error && <p className="text-[13px] text-[#C0392B] -mt-2 mb-4">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
