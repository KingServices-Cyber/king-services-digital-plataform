import type { Metadata } from "next";
import { Card, Content, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Central de Conteúdo",
  alternates: { canonical: "/central-de-conteudo" },
  description: "E-books, guias, white papers e webinars da King Services.",
};

const MATERIALS = [
  { badge: "E-book", title: "Material a ser substituído" },
  { badge: "Guia", title: "Material a ser substituído" },
  { badge: "White Paper", title: "Material a ser substituído" },
];

export default function CentralDeConteudoPage() {
  return (
    <>
      <PageHero
        eyebrow="Central de Conteúdo"
        title="Materiais para aprofundar seu conhecimento"
        description="E-books, guias, white papers e webinars — em breve disponíveis para download."
      />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MATERIALS.map((m, i) => (
            <Card key={i} clickable={false}>
              <span className="inline-block text-[11px] font-semibold bg-mist text-purple-700 rounded-pill px-2.5 py-1 mb-2">
                {m.badge}
              </span>
              <h3 className="font-display font-semibold text-sm mb-1">{m.title}</h3>
              <p className="text-xs text-graphite/70">Em breve.</p>
            </Card>
          ))}
        </div>
      </Content>
    </>
  );
}
