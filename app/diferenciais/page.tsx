import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Content, CtaFinal, PageHero } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Diferenciais",
  alternates: { canonical: "/diferenciais" },
  description: "Por que empresas escolhem a King Services como parceira de tecnologia e conectividade.",
};

const DIFERENCIAIS = [
  "Atendimento consultivo",
  "Portfólio completo",
  "Suporte qualificado",
  "Agilidade",
  "Pós-venda ativo",
];

export default function DiferenciaisPage() {
  return (
    <>
      <PageHero eyebrow="Diferenciais" title="Por que empresas escolhem a King Services" />
      <Content>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {DIFERENCIAIS.map((d) => (
            <Card key={d} clickable={false} center>
              <h3 className="text-xs font-semibold m-0">{d}</h3>
            </Card>
          ))}
        </div>
      </Content>
      <CtaFinal />
    </>
  );
}
