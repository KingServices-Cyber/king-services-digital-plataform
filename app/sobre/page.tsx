import type { Metadata } from "next";
import Image from "next/image";
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
  { title: "Telefonia Móvel Corporativa",    img: "/images/atuacao/telefonia-movel.jpg",    alt: "Smartphones e dispositivos corporativos" },
  { title: "Telefonia Fixa Empresarial",     img: "/images/atuacao/telefonia-fixa.jpg",     alt: "Telefone fixo IP empresarial" },
  { title: "Internet Fibra Empresarial",     img: "/images/atuacao/internet-fibra.jpg",     alt: "Cabos de fibra óptica empresarial" },
  { title: "Links Dedicados",                img: "/images/atuacao/links-dedicados.jpg",    alt: "Infraestrutura de rede dedicada" },
  { title: "Vivo Cloud",                     img: "/images/atuacao/vivo-cloud.jpg",         alt: "Soluções em nuvem Vivo" },
  { title: "Segurança Digital",              img: "/images/atuacao/seguranca-digital.jpg",  alt: "Segurança cibernética empresarial" },
  { title: "Soluções IoT",                   img: "/images/atuacao/solucoes-iot.jpg",       alt: "Internet das Coisas corporativa" },
  { title: "Gestão de Mobilidade Corporativa", img: "/images/atuacao/gestao-mobilidade.jpg", alt: "Gestão de dispositivos móveis corporativos" },
  { title: "PABX em Nuvem",                 img: "/images/atuacao/pabx-nuvem.jpg",         alt: "Sistema PABX em nuvem" },
  { title: "UCaaS (Comunicação Unificada)",  img: "/images/atuacao/ucaas.jpg",              alt: "Comunicação unificada e videoconferência" },
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ATUACAO.map((item) => (
              <div
                key={item.title}
                className="rounded-xl overflow-hidden border border-[#660099]/20 bg-white shadow-sm hover:shadow-lg hover:border-[#660099]/60 transition-all duration-200 group"
              >
                <div className="relative w-full h-[150px]">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="px-3 py-2.5 border-t-2 border-[#660099]/30">
                  <h3 className="text-[11.5px] font-semibold text-[#660099] leading-snug text-center m-0">
                    {item.title}
                  </h3>
                </div>
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
            <div className="rounded-2xl overflow-hidden border border-[#660099]/15 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px]">
                <Image
                  src="/images/missao.jpg"
                  alt="Nossa Missão — equipe unida com ícones de objetivo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-slate-50">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-16 h-16 rounded-full bg-[#660099] flex items-center justify-center text-white shrink-0 shadow-md">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                    </svg>
                  </span>
                  <h3 className="font-display font-bold text-2xl text-graphite">
                    Nossa <span className="text-[#660099]">Missão</span>
                  </h3>
                </div>
                <p className="text-base text-graphite/75 leading-relaxed">
                  Oferecer soluções completas de telecomunicações e tecnologia que conectem pessoas, empresas
                  e oportunidades, gerando valor e resultados para nossos clientes.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="rounded-2xl overflow-hidden border border-[#660099]/15 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px]">
                <Image
                  src="/images/visao.jpg"
                  alt="Nossa Visão — líder olhando para o horizonte da cidade"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-slate-50">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-16 h-16 rounded-full bg-[#660099] flex items-center justify-center text-white shrink-0 shadow-md">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  <h3 className="font-display font-bold text-2xl text-graphite">
                    Nossa <span className="text-[#660099]">Visão</span>
                  </h3>
                </div>
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
