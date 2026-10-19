import type { Metadata } from "next";
import Link from "next/link";
import { Content, CtaFinal, EyebrowSmall, PageHero, StepsList, ListCheck } from "@/components/ui";

export const metadata: Metadata = {
  title: "Parceiro Vivo Empresas",
  alternates: { canonical: "/vivo-empresas" },
  description:
    "Consultoria especializada na comercialização, implantação e gestão de soluções corporativas Vivo Empresas.",
};

const PORTFOLIO = [
  {
    title: "Internet Empresarial",
    desc: "Fibra óptica dedicada com SLA contratual, IP fixo incluso e suporte técnico especializado 24/7.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Telefonia Móvel Corporativa",
    desc: "Planos empresariais Vivo com gestão centralizada de linhas, portabilidade e controle de custos.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Telefonia Fixa e PABX",
    desc: "PABX virtual em nuvem, troncos SIP, ramais inteligentes e integração com CRM.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Soluções Cloud",
    desc: "Infraestrutura em nuvem escalável com backup automatizado e recuperação de desastres.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Segurança Digital",
    desc: "Firewall gerenciado, antivírus corporativo, proteção contra ataques e monitoramento contínuo de rede.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Internet das Coisas (IoT)",
    desc: "Rastreamento de frotas, telemetria, monitoramento remoto e automação de operações.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
];

const DIFERENCIAIS = [
  {
    title: "Certificação Vivo",
    desc: "Time certificado e treinado continuamente pela Vivo Empresas, garantindo a melhor entrega das soluções.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Atendimento Local",
    desc: "Presença em São José do Rio Preto e região com suporte presencial quando necessário.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Gerente de Conta",
    desc: "Um profissional dedicado acompanha seu contrato, antecipa necessidades e garante a melhor experiência.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Suporte 24/7",
    desc: "Equipe técnica disponível a qualquer hora via WhatsApp, telefone e chat para resolver incidentes.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function VivoEmpresasPage() {
  return (
    <>
      <PageHero
        eyebrow="Parceria estratégica"
        title="Parceira Autorizada Vivo Empresas"
        description="Consultoria especializada na comercialização, implantação e gestão de soluções corporativas Vivo Empresas — com atendimento local e suporte dedicado."
      />

      {/* Benefícios */}
      <Content>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <EyebrowSmall>Por que a KingServices</EyebrowSmall>
            <h2 className="font-display font-bold text-[clamp(22px,3vw,32px)] text-text mb-6 leading-tight">
              Mais do que um revendedor — somos seu parceiro estratégico
            </h2>
            <ListCheck
              items={[
                "Portfólio completo Vivo Empresas em um só lugar",
                "Consultoria especializada, do diagnóstico à implantação",
                "Atendimento nacional com suporte presencial local",
                "Processo comercial ágil, sem burocracia",
                "Gerente de conta dedicado para o seu negócio",
                "Pós-venda ativo com check-ins periódicos",
              ]}
            />
            <div className="mt-8">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-pill bg-primary text-white hover:bg-primary-700 transition-colors text-sm"
              >
                Falar com um especialista
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "+500", label: "Empresas atendidas" },
              { value: "+15", label: "Anos de experiência" },
              { value: "24/7", label: "Suporte técnico" },
              { value: "100%", label: "Foco em resultado" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-primary-50 border border-primary/10 p-6 text-center">
                <p className="font-display font-bold text-3xl text-primary">{stat.value}</p>
                <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Content>

      {/* Portfólio */}
      <Content tinted>
        <EyebrowSmall>Portfólio Vivo Empresas</EyebrowSmall>
        <h2 className="font-display font-bold text-[clamp(20px,2.5vw,28px)] text-text mb-8 leading-tight">
          Soluções completas para cada necessidade
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-border bg-white hover:shadow-card hover:border-primary/30 transition-all duration-300 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-text mb-1">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/solucoes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700 transition-colors"
          >
            Ver todas as soluções
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Content>

      {/* Diferenciais */}
      <Content>
        <EyebrowSmall>Nossos diferenciais</EyebrowSmall>
        <h2 className="font-display font-bold text-[clamp(20px,2.5vw,28px)] text-text mb-8 leading-tight">
          O que nos diferencia de outros parceiros Vivo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFERENCIAIS.map((d) => (
            <div key={d.title} className="p-6 rounded-xl border border-border bg-white hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                {d.icon}
              </div>
              <h3 className="font-bold text-sm text-text mb-2">{d.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </Content>

      {/* Metodologia */}
      <Content tinted>
        <div id="metodologia-vivo">
          <EyebrowSmall>Nossa metodologia</EyebrowSmall>
          <h2 className="font-display font-bold text-[clamp(20px,2.5vw,28px)] text-text mb-8 leading-tight">
            Como funciona nosso processo
          </h2>
          <StepsList withDesc />
        </div>
      </Content>

      <CtaFinal />
    </>
  );
}
