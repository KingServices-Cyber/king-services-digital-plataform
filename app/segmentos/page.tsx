import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Content, PageHero } from "@/components/PageParts";
import { SEGMENTS } from "@/lib/data";

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
            <Card key={s.slug} href={`/segmentos/${s.slug}`} center>
              <h3 className="text-xs font-semibold m-0">{s.title}</h3>
            </Card>
          ))}
        </div>
      </Content>
    </>
  );
}
