import type { Metadata } from "next";
import { ButtonLink, Card, Content, CtaFinal, EyebrowSmall, SectionTitle } from "@/components/ui";
import { SOLUTIONS, SOLUTION_CATEGORIES, SEGMENTS } from "@/lib/content";

const TESTIMONIALS = [
  {
    quote:
      "A King Services transformou nossa infraestrutura de telecomunicação. O atendimento consultivo fez toda a diferença na escolha das soluções certas para nosso negócio.",
    name: "Roberto M.",
    role: "Diretor de TI",
    segment: "Indústria",
  },
  {
    quote:
      "Desde que migramos para a Vivo Empresas com a King Services, nosso suporte técnico ficou muito mais ágil. O pós-venda ativo realmente funciona.",
    name: "Carla S.",
    role: "Gerente de Operações",
    segment: "Comércio",
  },
  {
    quote:
      "Conectividade estável em todas as nossas filiais era um desafio. A King Services entregou a solução completa com internet dedicada e monitoramento 24/7.",
    name: "Fernando L.",
    role: "CEO",
    segment: "Logística",
  },
];

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
        <p className="text-[10px] font-bold uppercase tracking-wide text-[#8B8780] mb-3.5">
          Empresas que confiam na King Services
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[110px] h-[40px] rounded-lg bg-mist border border-dashed border-fog flex items-center justify-center text-[11px] font-semibold text-graphite/30"
            >
              Logo cliente
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <Content tinted>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Card
              key={s.label}
              clickable={false}
              center
              className="py-8 md:py-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-mono text-3xl md:text-4xl font-bold text-purple-700 m-0">{s.value}</p>
              <p className="text-xs text-graphite/60 mt-2">{s.label}</p>
            </Card>
          ))}
        </div>
      </Content>

      {/* Soluções em destaque */}
      <Content>
        <EyebrowSmall>Soluções</EyebrowSmall>
        <SectionTitle>Tecnologia sob medida para cada etapa do seu negócio</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(SOLUTIONS).map((s) => {
            const category = SOLUTION_CATEGORIES.find((c) => c.slug === s.category);
            return (
              <Card key={s.slug} href={`/solucoes/${s.slug}`} highlight>
                {category && (
                  <span className="text-[11px] font-bold uppercase tracking-wide text-lilac-500 transition-colors duration-300 group-hover:text-lilac-300">
                    {category.name}
                  </span>
                )}
                <h3 className="font-display font-semibold text-sm mt-1 mb-1 transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-graphite/70 transition-colors duration-300 group-hover:text-white/85">
                  {s.desc}
                </p>
                <ul className="flex flex-col gap-1 mt-3">
                  {s.specs.slice(0, 3).map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-1.5 text-xs text-graphite/80 transition-colors duration-300 group-hover:text-white/90"
                    >
                      <span className="w-1 h-1 rounded-full bg-lilac-500 mt-1.5 shrink-0 transition-colors duration-300 group-hover:bg-lilac-300" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <span className="block text-xs font-bold text-purple-700 mt-3 transition-colors duration-300 group-hover:text-white">
                  Ver detalhes →
                </span>
              </Card>
            );
          })}
        </div>
      </Content>

      {/* Segmentos */}
      <Content tinted>
        <EyebrowSmall>Segmentos</EyebrowSmall>
        <SectionTitle>Especialização que entende os desafios do seu setor</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {Object.values(SEGMENTS).map((s) => (
            <Card key={s.slug} href={`/segmentos/${s.slug}`} center highlight>
              <h3 className="text-sm font-semibold m-0 transition-colors duration-300 group-hover:text-white">
                {s.title}
              </h3>
            </Card>
          ))}
        </div>
      </Content>

      {/* Depoimentos */}
      <Content>
        <EyebrowSmall>Depoimentos</EyebrowSmall>
        <SectionTitle>O que nossos clientes dizem</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} clickable={false}>
              <p className="text-[13px] text-amber-400 tracking-widest mb-2">★★★★★</p>
              <p className="text-sm leading-relaxed text-graphite italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 mt-auto">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-lilac-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-semibold">{t.name}</p>
                  <p className="text-[11px] text-graphite/60">
                    {t.role} — {t.segment}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Content>

      <CtaFinal />
    </>
  );
}
