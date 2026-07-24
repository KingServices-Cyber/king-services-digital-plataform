import type { Metadata } from "next";
import { ButtonLink, Card, Content, EyebrowSmall, SectionTitle } from "@/components/ui";
import { SOLUTIONS, SEGMENTS } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const STATS = [
  { value: "+15", label: "anos de experiência" },
  { value: "+500", label: "empresas atendidas" },
  { value: "24/7", label: "suporte especializado" },
  { value: "100%", label: "atendimento nacional" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 to-purple-600 text-white px-4 md:px-6 py-10 md:py-14">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[11px] font-semibold border border-white/25 rounded-pill px-2.5 py-1 text-lilac-300">
            Parceira Autorizada Vivo Empresas
          </span>
          <h1 className="font-display font-semibold mt-3.5 max-w-[720px] text-[clamp(24px,4.5vw,34px)]">
            Conectividade e tecnologia para empresas que não podem parar.
          </h1>
          <p className="mt-3 max-w-[560px] text-white/85 text-sm">
            Consultoria especializada em telecomunicações que une a força da Vivo Empresas à proximidade de
            quem entende o seu negócio.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-4">
            <ButtonLink href="/contato" className="!bg-white !text-purple-900">
              Fale com um especialista
            </ButtonLink>
            <ButtonLink href="/solucoes" className="!bg-transparent !text-white border border-white/40">
              Conheça as soluções
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="px-4 md:px-6 py-6 text-center border-b border-[#F0EEF5]">
        <p className="text-[10px] font-bold uppercase tracking-wide text-[#8B8780] mb-3">
          Empresas que confiam na King Services
        </p>
        <div className="flex justify-center gap-6 flex-wrap opacity-50 text-xs font-semibold">
          <span>Cliente A</span>
          <span>Cliente B</span>
          <span>Cliente C</span>
          <span>Cliente D</span>
          <span>Cliente E</span>
        </div>
      </div>

      {/* Stats */}
      <Content tinted>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono text-[22px] font-bold text-purple-700 m-0">{s.value}</p>
              <p className="text-[10px] text-[#5F5E5A] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </Content>

      {/* Soluções em destaque */}
      <Content>
        <EyebrowSmall>Soluções</EyebrowSmall>
        <SectionTitle>Tecnologia sob medida para cada etapa do seu negócio</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(SOLUTIONS).map((s) => (
            <Card key={s.slug} href={`/solucoes/${s.slug}`}>
              <h3 className="font-display font-semibold text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-graphite/70">{s.desc.slice(0, 60)}...</p>
            </Card>
          ))}
        </div>
      </Content>

      {/* Segmentos */}
      <Content tinted>
        <EyebrowSmall>Segmentos</EyebrowSmall>
        <SectionTitle>Especialização que entende os desafios do seu setor</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {Object.values(SEGMENTS).map((s) => (
            <Card key={s.slug} href={`/segmentos/${s.slug}`} center>
              <h3 className="text-xs font-semibold m-0">{s.title}</h3>
            </Card>
          ))}
        </div>
      </Content>
    </>
  );
}
