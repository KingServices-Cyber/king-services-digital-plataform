import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      <CtaFinal />
    </>
  );
}
