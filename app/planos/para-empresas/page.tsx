import type { Metadata } from "next";
import Link from "next/link";
import { fetchPJPlans } from "@/lib/data";
import { PlanPageClient } from "@/components/ui/PlanPageClient";

export const metadata: Metadata = {
  title: "Planos Para Empresas — Internet Empresarial",
  description:
    "Soluções de internet dedicada para PME e grandes corporações. IP fixo, SLA garantido, suporte prioritário 24/7 e gerente de conta exclusivo.",
};

export default async function ParaEmpresasPage() {
  const plans = await fetchPJPlans();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient py-16 md:py-24 px-6 text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
            Para Empresas — CNPJ (PME e Corporações)
          </div>
          <h1 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-tight mb-4">
            Conectividade que impulsiona seu negócio
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Internet dedicada com IP fixo, SLA garantido e suporte prioritário. Da pequena empresa
            à grande corporação, temos a solução certa para você.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: "🏢", text: "IP fixo incluso em todos os planos" },
              { icon: "📊", text: "SLA contratual garantido" },
              { icon: "👤", text: "Gerente de conta dedicado" },
              { icon: "🔒", text: "Conexão dedicada e segura" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/90">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos PME */}
      <section id="pme" className="py-16 md:py-20 px-6 bg-surface-secondary scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Planos Empresariais
            </span>
            <h2 className="font-display font-bold text-[clamp(22px,3vw,34px)] text-text mt-3">
              Para PME e Grandes Corporações
            </h2>
            <p className="text-text-secondary mt-2 max-w-xl mx-auto">
              Do escritório com 5 colaboradores à sede com milhares, temos o plano certo.
              Todos incluem IP fixo e SLA contratual.
            </p>
          </div>
          <PlanPageClient plans={plans} />
        </div>
      </section>

      {/* Diferenciais empresariais */}
      <section id="corporacoes" className="py-14 px-6 bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-display font-bold text-[clamp(20px,2.5vw,30px)] text-text text-center mb-10">
            Por que contratar a KingServices para sua empresa?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏗️",
                title: "Infraestrutura Dedicada",
                desc: "Link 100% dedicado. Sem compartilhamento com outros clientes, garantindo a velocidade contratada.",
              },
              {
                icon: "📋",
                title: "SLA Contratual",
                desc: "Acordo de nível de serviço com garantia de disponibilidade e penalidades em caso de descumprimento.",
              },
              {
                icon: "👤",
                title: "Gerente de Conta",
                desc: "Um profissional dedicado ao seu negócio para gerenciar sua conta e antecipar necessidades.",
              },
              {
                icon: "🔍",
                title: "Monitoramento 24/7",
                desc: "Nossa equipe de NOC monitora sua conexão continuamente e age preventivamente em qualquer anomalia.",
              },
              {
                icon: "🌐",
                title: "IP Fixo Incluso",
                desc: "IP fixo em todos os planos para acesso remoto, VPN e sistemas hospedados na sua empresa.",
              },
              {
                icon: "📈",
                title: "Escalabilidade",
                desc: "Migre de plano conforme seu negócio cresce, sem burocracia e com continuidade total do serviço.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-border bg-surface-secondary">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-text mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-hero-gradient text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
            Precisa de uma solução personalizada?
          </h2>
          <p className="text-white/80 mb-7">
            Nossos consultores montam uma proposta sob medida para a sua empresa. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="inline-block bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Solicitar proposta comercial
            </Link>
            <Link
              href="/planos/para-voce"
              className="inline-block border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Ver planos para você
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
