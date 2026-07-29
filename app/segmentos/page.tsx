import type { Metadata } from "next";
import { Card, Content, PageHero } from "@/components/ui";
import { SEGMENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Segmentos",
  alternates: { canonical: "/segmentos" },
  description: "Soluções especializadas para os desafios de cada setor atendido pela King Services.",
};

export default function SegmentosIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos"
        title="Especialização que entende os desafios do seu setor"
        description="Cada segmento tem necessidades diferentes — conheça as soluções recomendadas para o seu."
      />
      <Content>
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
    </>
  );
}
