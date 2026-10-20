import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaFinal, PageHero } from "@/components/ui";
import { SOLUTIONS } from "@/lib/content";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = SOLUTIONS[params.slug];
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.desc,
    alternates: { canonical: `/solucoes/${solution.slug}` },
    openGraph: {
      title: `${solution.title} — KingServices`,
      description: solution.desc,
      url: `/solucoes/${solution.slug}`,
    },
  };
}

export default function SolucaoDetalhePage({ params }: { params: { slug: string } }) {
  const solution = SOLUTIONS[params.slug];
  if (!solution) notFound();

  const jsonLd = [
    serviceJsonLd({
      name: solution.title,
      description: solution.desc,
      slug: solution.slug,
      specs: solution.specs,
    }),
    breadcrumbJsonLd([
      { name: "Início", path: "/" },
      { name: "Soluções", path: "/solucoes" },
      { name: solution.title, path: `/solucoes/${solution.slug}` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow="Soluções" title={solution.title} description={solution.desc} />

      {/* Recursos / specs */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {solution.specs.map((spec) => (
            <div
              key={spec}
              className="flex items-center gap-2 border border-fog rounded-xl p-3 text-sm text-graphite"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lilac-500 shrink-0" />
              {spec}
            </div>
          ))}
        </div>
      </div>

      {/* Benefícios */}
      {solution.benefits && (
        <div className="bg-surface-secondary py-14 px-4 md:px-6">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8">
              Vantagens e benefícios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solution.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Planos */}
      {solution.plans && (
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8">
            Tipos de planos disponíveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solution.plans.map((plan) => (
              <div key={plan.name} className="flex flex-col border border-border rounded-2xl p-5 gap-3">
                <h3 className="font-display font-bold text-base text-text-primary">{plan.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">{plan.desc}</p>
                <ul className="flex flex-col gap-1.5 pt-3 border-t border-border">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Para quem é indicado */}
      {solution.targetAudience && (
        <div className="bg-surface-secondary py-14 px-4 md:px-6">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8">
              Para quem é indicado
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solution.targetAudience.map((audience) => (
                <div key={audience} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                  <span className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      {(solution.benefits || solution.plans || solution.targetAudience) && (
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">
            Pronto para levar {solution.title} para sua empresa?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Fale com um especialista da King Services e receba uma proposta personalizada para o seu negócio.
          </p>
          <Link
            href="/contato?assunto=plano-pj"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Solicitar proposta
          </Link>
        </div>
      )}

      <CtaFinal />
    </>
  );
}
