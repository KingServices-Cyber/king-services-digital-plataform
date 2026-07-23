"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "@/components/PageParts";
import { WhatsAppLink } from "@/components/WhatsAppIcon";
import { CONTACT_INFO } from "@/lib/data";
import { mascararCPF, mascararCNPJ, mascararTelefone } from "@/lib/masks";

export default function ContatoPage() {
  const [docTipo, setDocTipo] = useState<"cpf" | "cnpj">("cpf");
  const [docValue, setDocValue] = useState("");
  const [telefone, setTelefone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleDocChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDocValue(docTipo === "cpf" ? mascararCPF(e.target.value) : mascararCNPJ(e.target.value));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre a conectividade da sua empresa?"
      />
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Informações de contato */}
        <div>
          <span className="block text-[13px] font-bold uppercase text-[#8F58C9] mb-2">Fale com a King Services</span>

          <div className="mt-[18px] text-[19px] leading-[1.6] text-[#3A3937]">
            <p className="font-bold text-graphite mb-1.5">Central de Atendimento:</p>
            <p className="mb-2">📞 {CONTACT_INFO.phone}</p>
            <p className="mb-6 flex items-center gap-2">
              <WhatsAppLink iconOnly />
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener" className="text-[#3A3937] no-underline">
                {CONTACT_INFO.phone}
              </a>
            </p>

            <p className="font-bold text-graphite mb-1.5">✉ E-mail:</p>
            <p className="mb-6">{CONTACT_INFO.email}</p>

            <p className="font-bold text-graphite mb-1.5">📍 Escritório:</p>
            <p>
              {CONTACT_INFO.addressLine1}
              <br />
              {CONTACT_INFO.addressLine2}
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
              <p className="text-[13px] text-[#8F58C9] -mt-1 mb-4">* Preenchimento obrigatório em todos os campos</p>

              <label className="block text-[15px] font-medium mb-1.5">Nome *</label>
              <input type="text" required className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4" />

              <label className="block text-[15px] font-medium mb-1.5">E-mail *</label>
              <input type="email" required className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4" />

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
              <textarea required rows={3} className="w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4" />

              <button
                type="submit"
                className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white transition-transform hover:-translate-y-0.5"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
