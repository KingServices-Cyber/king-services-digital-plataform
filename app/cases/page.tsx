import type { Metadata } from "next";
import { Card, Content, CtaFinal, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cases",
  alternates: { canonical: "/cases" },
  description: "Resultados reais de empresas que transformaram sua conectividade com a KingServices.",
};

const PLACEHOLDER_CASES = [
  { badge: "Indústria", title: "Case a ser substituído" },
  { badge: "Varejo", title: "Case a ser substituído" },
  { badge: "Saúde", title: "Case a ser substituído" },
];

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="Empresas que já transformaram sua conectividade"
        description="Resultados reais em diferentes segmentos — em breve, com o material enviado pelo cliente."
      />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLACEHOLDER_CASES.map((c, i) => (
            <Card key={i} clickable={false}>
              <span className="inline-block text-[11px] font-semibold bg-mist text-purple-700 rounded-pill px-2.5 py-1 mb-2">
                {c.badge}
              </span>
              <h3 className="font-display font-semibold text-sm mb-1">{c.title}</h3>
              <p className="text-xs text-graphite/70">Desafio, solução e resultado (placeholder).</p>
            </Card>
          ))}
        </div>
      </Content>
      <CtaFinal />
    </>
  );
}
