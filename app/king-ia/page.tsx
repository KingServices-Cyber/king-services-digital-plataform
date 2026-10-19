import type { Metadata } from "next";
import Link from "next/link";
import { Content, CtaFinal, EyebrowSmall, PageHero } from "@/components/ui";
import {
  KING_IA_CATEGORIES,
  KING_IA_SOLUTIONS,
  KING_IA_PLANS,
  KING_IA_PRICING_NOTE,
} from "@/lib/content/king-ia";

export const metadata: Metadata = {
  title: "King IA — Soluções de Inteligência Artificial",
  alternates: { canonical: "/king-ia" },
  description:
    "20 soluções de IA e automação para atrair, converter, atender e operar com mais eficiência. Conheça o portfólio King IA.",
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  atrair: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
  converter: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  atender: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  operar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  analisar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  evoluir: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function KingIAPage() {
  return (
    <>
      <PageHero
        eyebrow="King IA"
        title="Inteligência Artificial para cada etapa do seu negócio"
        description="20 soluções de IA e automação prontas para atrair clientes, converter mais, atender melhor e operar com eficiência."
      />

      {/* Categorias — navegação rápida */}
      <Content>
        <EyebrowSmall>Portfólio de soluções</EyebrowSmall>
        <h2 className="font-display font-bold text-[clamp(20px,2.5vw,28px)] text-text mb-8 leading-tight">
          6 frentes de atuação, 20 soluções
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {KING_IA_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <span className="opacity-70">{CATEGORY_ICONS[cat.slug]}</span>
              {cat.label}
            </a>
          ))}
        </div>

        {/* Soluções agrupadas por categoria */}
        <div className="flex flex-col gap-14">
          {KING_IA_CATEGORIES.map((cat) => {
            const solutions = KING_IA_SOLUTIONS.filter((s) => s.category === cat.slug);
            return (
              <div key={cat.slug} id={cat.slug}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-primary">
                    {CATEGORY_ICONS[cat.slug]}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/70 leading-none mb-0.5">
                      {cat.label}
                    </p>
                    <p className="text-xs text-text-secondary">{cat.tagline}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {solutions.map((s) => (
                    <div
                      key={s.slug}
                      className="p-5 rounded-xl border border-border bg-white hover:shadow-card hover:border-primary/30 transition-all duration-300 flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">
                          #{String(s.id).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm text-text leading-snug">{s.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed flex-1">{s.desc}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-primary-50 text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Content>

      {/* Planos */}
      <Content tinted>
        <EyebrowSmall>Planos King IA</EyebrowSmall>
        <h2 className="font-display font-bold text-[clamp(20px,2.5vw,28px)] text-text mb-3 leading-tight">
          Escolha o plano ideal para o seu momento
        </h2>
        <p className="text-sm text-text-secondary mb-8 max-w-xl">{KING_IA_PRICING_NOTE}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KING_IA_PLANS.map((plan) => (
            <div
              key={plan.slug}
              className={`rounded-xl border p-6 flex flex-col gap-4 ${
                plan.highlight
                  ? "border-primary bg-primary text-white shadow-lg scale-[1.02]"
                  : "border-border bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white rounded-full px-3 py-1 self-start">
                  Mais popular
                </span>
              )}
              <div>
                <h3
                  className={`font-display font-bold text-base ${
                    plan.highlight ? "text-white" : "text-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    plan.highlight ? "text-white/70" : "text-text-secondary"
                  }`}
                >
                  {plan.price}
                </p>
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs">
                    <svg
                      className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                        plan.highlight ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-white/90" : "text-text-secondary"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contato"
                className={`mt-2 text-center text-xs font-bold py-2.5 rounded-pill transition-colors ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-700"
                }`}
              >
                Solicitar proposta
              </Link>
            </div>
          ))}
        </div>
      </Content>

      <CtaFinal />
    </>
  );
}
