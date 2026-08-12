import type { Metadata } from "next";
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

const ATUACAO = [
  "Telefonia Móvel Corporativa",
  "Telefonia Fixa Empresarial",
  "Internet Fibra Empresarial",
  "Links Dedicados",
  "Vivo Cloud",
  "Segurança Digital",
  "Soluções IoT",
  "Gestão de Mobilidade Corporativa",
  "PABX em Nuvem",
  "UCaaS (Comunicação Unificada)",
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
          <p className="text-sm max-w-[640px] leading-relaxed">
            A KingServices é uma empresa especializada na comercialização, consultoria e gestão de
            soluções corporativas da Vivo Empresas, oferecendo atendimento personalizado para clientes
            Pessoa Física (PF), Pequenas e Médias Empresas (PME) e Grandes Corporações.
          </p>
          <p className="text-sm max-w-[640px] leading-relaxed mt-3">
            Nosso compromisso é entregar soluções que aumentem a produtividade, reduzam custos
            operacionais e impulsionem o crescimento dos negócios de nossos clientes.
          </p>
        </div>
      </Content>
      <Content tinted>
        <div id="nossa-atuacao">
          <EyebrowSmall>Nossa Atuação</EyebrowSmall>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {ATUACAO.map((item) => (
              <Card key={item} clickable={false} center>
                <h3 className="text-xs font-semibold m-0">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Content>
      <Content>
        <div id="missao-e-visao">
          <EyebrowSmall>Missão e Visão</EyebrowSmall>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card clickable={false}>
              <span className="w-11 h-11 rounded-full bg-mist flex items-center justify-center text-purple-600">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="12" cy="18" r="2.5" />
                  <path d="M8.2 7.3 10 15.5M15.8 7.3 14 15.5M8.5 6h7" />
                </svg>
              </span>
              <h3 className="font-display font-semibold text-sm mt-3 mb-1">Nossa Missão</h3>
              <p className="text-sm text-graphite/80 leading-relaxed">
                Oferecer soluções completas de telecomunicações e tecnologia que conectem pessoas, empresas
                e oportunidades, gerando valor e resultados para nossos clientes.
              </p>
            </Card>
            <Card clickable={false}>
              <span className="w-11 h-11 rounded-full bg-mist flex items-center justify-center text-purple-600">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                  <circle cx="12" cy="12" r="2.8" />
                </svg>
              </span>
              <h3 className="font-display font-semibold text-sm mt-3 mb-1">Nossa Visão</h3>
              <p className="text-sm text-graphite/80 leading-relaxed">
                Ser reconhecida como uma das principais consultorias comerciais de telecomunicações do
                Brasil, destacando-se pela excelência no atendimento, inovação e geração de resultados.
              </p>
            </Card>
          </div>
        </div>
      </Content>
      <Content tinted>
        <div id="nossos-valores">
          <EyebrowSmall>Nossos Valores</EyebrowSmall>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {VALORES.map((v) => (
              <Card key={v.title} clickable={false}>
                <h3 className="font-display font-semibold text-sm mb-1">{v.title}</h3>
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
