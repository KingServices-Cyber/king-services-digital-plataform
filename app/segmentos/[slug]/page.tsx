import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { Content, CtaFinal, ListCheck, PageHero, SectionTitle } from "@/components/PageParts";
import { SEGMENTS, SOLUTIONS } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(SEGMENTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const segment = SEGMENTS[params.slug];
  if (!segment) return {};
  return {
    title: segment.title,
    description: segment.desc,
    alternates: { canonical: `/segmentos/${segment.slug}` },
    openGraph: {
      title: `${segment.title} — King Services`,
      description: segment.desc,
      url: `/segmentos/${segment.slug}`,
    },
  };
}

export default function SegmentoDetalhePage({ params }: { params: { slug: string } }) {
  const segment = SEGMENTS[params.slug];
  if (!segment) notFound();

  return (
    <>
      <PageHero eyebrow="Segmentos" title={segment.title} description={segment.desc} />
      <Content>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SectionTitle>Desafios do setor</SectionTitle>
            <ListCheck items={segment.challenges} />
          </div>
          <div>
            <SectionTitle>Benefícios</SectionTitle>
            <ListCheck items={segment.benefits} />
          </div>
        </div>
      </Content>
      <Content tinted>
        <SectionTitle>Soluções recomendadas</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {segment.recommended.map((slug) => {
            const sol = SOLUTIONS[slug];
            if (!sol) return null;
            return (
              <Card key={slug} href={`/solucoes/${slug}`}>
                <h3 className="text-xs font-semibold m-0">{sol.title}</h3>
              </Card>
            );
          })}
        </div>
      </Content>
      <CtaFinal />
    </>
  );
}
