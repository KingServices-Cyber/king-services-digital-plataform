import type { Metadata } from "next";
import { Card, Content, CtaFinal, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Diferenciais",
  alternates: { canonical: "/diferenciais" },
  description: "Por que empresas escolhem a KingServices como parceira de tecnologia e conectividade.",
};

const DIFERENCIAIS = [
  "Atendimento consultivo",
  "Portfólio completo",
  "Suporte qualificado",
  "Relacionamento de Longo Prazo",
  "Agilidade na Implantação",
  "Atendimento Nacional",
  "Especialistas Certificados",
  "Pós-venda ativo",
];

export default function DiferenciaisPage() {
  return (
    <>
      <PageHero eyebrow="Diferenciais" title="Por que empresas escolhem a KingServices" />
      <Content>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
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
