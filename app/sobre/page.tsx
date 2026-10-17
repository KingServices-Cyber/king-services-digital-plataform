import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Card, Content, EyebrowSmall, PageHero, StepsList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre",
  alternates: { canonical: "/sobre" },
  description:
    "Consultoria especializada em telecomunicações e tecnologia, conectando empresas à solução certa.",
};

const VALORES = [
  { title: "Ética", desc: "Atuar com transparência e responsabilidade." },
  { title: "Excelência", desc: "Buscar continuamente a melhoria dos processos e serviços." },
  { title: "Inovação", desc: "Apresentar soluções modernas e eficientes." },
  { title: "Comprometimento", desc: "Entender e atender as necessidades dos clientes." },
  { title: "Resultado", desc: "Foco na geração de valor para clientes e parceiros." },
];

const ATUACAO: { title: string; icon: ReactNode }[] = [
  {
    title: "Telefonia Móvel Corporativa",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Telefonia Fixa Empresarial",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Internet Fibra Empresarial",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Links Dedicados",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Vivo Cloud",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Segurança Digital",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Soluções IoT",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Gestão de Mobilidade Corporativa",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM9 7h6M9 11h4" />
      </svg>
    ),
  },
  {
    title: "PABX em Nuvem",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
    ),
  },
  {
    title: "UCaaS (Comunicação Unificada)",
    icon: (
      <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a KingServices"
        title="Conectando empresas à tecnologia certa para crescer"
        description="Consultoria especializada em telecomunicações e tecnologia."
      />
      <Content>
        <div id="quem-somos">
          <EyebrowSmall>Quem somos</EyebrowSmall>
          <p className="text-base max-w-[640px] leading-relaxed">
            A KingServices é uma empresa especializada na comercialização, consultoria e gestão de
            soluções corporativas da Vivo Empresas, oferecendo atendimento personalizado para clientes
            Pessoa Física (PF), Pequenas e Médias Empresas (PME) e Grandes Corporações.
          </p>
          <p className="text-base max-w-[640px] leading-relaxed mt-3">
            Nosso compromisso é entregar soluções que aumentem a produtividade, reduzam custos
            operacionais e impulsionem o crescimento dos negócios de nossos clientes.
          </p>
        </div>
      </Content>
      <Content tinted>
        <div id="nossa-atuacao">
          <EyebrowSmall>Nossa Atuação</EyebrowSmall>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ATUACAO.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#660099]/20 bg-white shadow-sm hover:shadow-lg hover:border-[#660099]/60 hover:-translate-y-1 transition-all duration-200 group flex flex-col items-center gap-3 p-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors duration-200 [&_svg]:transition-colors [&_svg]:duration-200 group-hover:[&_svg]:text-white">
                  {item.icon}
                </div>
                <h3 className="text-[11.5px] font-semibold text-[#660099] leading-snug text-center m-0">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Content>
      <Content>
        <div id="missao-e-visao">
          <EyebrowSmall>Missão e Visão</EyebrowSmall>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Missão */}
            <div className="rounded-2xl border border-[#660099]/15 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-graphite mb-3">
                  Nossa <span className="text-[#660099]">Missão</span>
                </h3>
                <p className="text-base text-graphite/75 leading-relaxed">
                  Oferecer soluções completas de telecomunicações e tecnologia que conectem pessoas, empresas
                  e oportunidades, gerando valor e resultados para nossos clientes.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="rounded-2xl border border-[#660099]/15 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-graphite mb-3">
                  Nossa <span className="text-[#660099]">Visão</span>
                </h3>
                <p className="text-base text-graphite/75 leading-relaxed">
                  Ser reconhecida como uma das principais consultorias comerciais de telecomunicações do
                  Brasil, destacando-se pela excelência no atendimento, inovação e geração de resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Content tinted>
        <div id="nossos-valores">
          <EyebrowSmall>Nossos Valores</EyebrowSmall>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {VALORES.map((v) => (
              <Card key={v.title} clickable={false}>
                <h3 className="font-display font-semibold text-sm mb-1 text-primary">{v.title}</h3>
                <p className="text-xs text-graphite/70 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Content>
      <Content>
        <div id="metodologia-sobre">
          <EyebrowSmall>Metodologia de trabalho</EyebrowSmall>
          <StepsList withDesc={false} />
        </div>
      </Content>
    </>
  );
}
