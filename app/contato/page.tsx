"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
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
  const [lgpdAccepted, setLgpdAccepted] = useState(false);

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
            Fale com a KingServices
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[15px] leading-[1.6] text-[#3A3937]">
            {CONTACT_INFO.offices.map((office) => (
              <div key={office.label}>
                <p className="font-bold text-graphite mb-1.5">📍 {office.label}:</p>
                <p className="mb-3">
                  {office.companyName}
                  <br />
                  CNPJ: {office.cnpj}
                  <br />
                  {office.addressStreet}
                  <br />
                  {office.addressCity}
                  <br />
                  {office.addressCep}
                </p>
                <div className="rounded-xl overflow-hidden border border-fog">
                  <iframe
                    src={office.mapsEmbedUrl}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${office.label}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário */}
        <div className="border border-fog rounded-card p-6 h-fit">
          {submitted ? (
            <p className="text-[15px] text-purple-700 font-semibold">
              ✓ Mensagem enviada! Um especialista KingServices entrará em contato.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-[13px] text-[#8F58C9] -mt-1 mb-4">
                * Preenchimento obrigatório em todos os campos
              </p>

              {/* Linha 1: Nome + E-mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[14px] font-medium mb-1.5">Nome *</label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm"
                  />
                </div>
              </div>

              {/* Linha 2: Tipo doc + Doc */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[14px] font-medium mb-1.5">Tipo de documento *</label>
                  <select
                    required
                    value={docTipo}
                    onChange={(e) => {
                      setDocTipo(e.target.value as "cpf" | "cnpj");
                      setDocValue("");
                    }}
                    className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm bg-white"
                  >
                    <option value="cpf">CPF</option>
                    <option value="cnpj">CNPJ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[14px] font-medium mb-1.5">{docTipo.toUpperCase()} *</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    required
                    value={docValue}
                    onChange={handleDocChange}
                    placeholder={docTipo === "cpf" ? "000.000.000-00" : "00.000.000/0000-00"}
                    maxLength={docTipo === "cpf" ? 14 : 18}
                    className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm"
                  />
                </div>
              </div>

              {/* Linha 3: Telefone */}
              <label className="block text-[14px] font-medium mb-1.5">Celular / WhatsApp *</label>
              <input
                type="tel"
                inputMode="numeric"
                required
                value={telefone}
                onChange={(e) => setTelefone(mascararTelefone(e.target.value))}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm mb-4"
              />

              {/* Linha 4: Mensagem */}
              <label className="block text-[14px] font-medium mb-1.5">Mensagem *</label>
              <textarea
                required
                rows={3}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm mb-4"
              />

              {/* Checkbox LGPD */}
              <label className="flex items-start gap-2.5 mb-4 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={lgpdAccepted}
                  onChange={(e) => setLgpdAccepted(e.target.checked)}
                  className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 accent-purple-600 cursor-pointer"
                />
                <span className="text-[12.5px] leading-relaxed text-graphite/70">
                  Ao enviar este formulário, concordo com o tratamento dos meus dados pessoais conforme a{" "}
                  <Link href="/contato" className="text-purple-600 underline hover:text-purple-800">
                    Política de Privacidade (LGPD)
                  </Link>{" "}
                  da KingServices.
                </span>
              </label>

              {error && <p className="text-[13px] text-[#C0392B] -mt-2 mb-4">{error}</p>}

              <button
                type="submit"
                disabled={loading || !lgpdAccepted}
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
