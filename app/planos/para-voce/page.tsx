// Para Você plans page — uses PlanPageClient from ui/
import type { Metadata } from "next";
import Link from "next/link";
import { fetchPFPlans } from "@/lib/data";
import { PlanPageClient } from "@/components/ui/PlanPageClient";

export const metadata: Metadata = {
  title: "Planos Para Você — Internet Residencial",
  description:
    "Planos de internet fibra óptica para pessoa física. Velocidades de 50 Mbps a 500 Mbps com instalação grátis, Wi-Fi potente e suporte 24/7.",
};

export default async function ParaVocePage() {
  const plans = await fetchPFPlans();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient py-16 md:py-24 px-6 text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Para Você — Pessoa Física (CPF)
          </div>
          <h1 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-tight mb-4">
            Internet que cabe no seu ritmo de vida
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Fibra óptica de verdade com velocidade garantida, instalação gratuita e sem burocracia.
            Escolha o plano ideal para você e sua família.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: "⚡", text: "Instalação grátis em até 48h" },
              { icon: "📶", text: "Wi-Fi potente incluso" },
              { icon: "🔁", text: "Sem fidelidade no plano mensal" },
              { icon: "💬", text: "Suporte humano 24/7" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/90">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 md:py-20 px-6 bg-surface-secondary">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Planos Residenciais
            </span>
            <h2 className="font-display font-bold text-[clamp(22px,3vw,34px)] text-text mt-3">
              Escolha o plano ideal para você
            </h2>
            <p className="text-text-secondary mt-2 max-w-xl mx-auto">
              Todos os planos incluem instalação grátis, Wi-Fi potente e suporte técnico especializado.
            </p>
          </div>
          <PlanPageClient plans={plans} />
        </div>
      </section>

      {/* Garantias */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-display font-bold text-[clamp(20px,2.5vw,30px)] text-text text-center mb-10">
            O que está incluso em todos os planos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛠️",
                title: "Instalação Grátis",
                desc: "Nossa equipe instala tudo em até 48h, sem custo adicional.",
              },
              {
                icon: "📶",
                title: "Wi-Fi Potente",
                desc: "Roteador dual-band incluso para cobertura em todos os cômodos.",
              },
              {
                icon: "💬",
                title: "Suporte 24/7",
                desc: "Atendimento humano via WhatsApp, chat e telefone a qualquer hora.",
              },
              {
                icon: "✅",
                title: "Sem Fidelidade",
                desc: "Cancele quando quiser no plano mensal, sem multa ou burocracia.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl border border-border bg-surface-secondary">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-hero-gradient text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
            Ficou com dúvidas?
          </h2>
          <p className="text-white/80 mb-7">
            Fale com um especialista e monte o plano ideal para a sua casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="inline-block bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Falar com especialista
            </Link>
            <Link
              href="/planos/para-empresas"
              className="inline-block border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Ver planos para empresas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
