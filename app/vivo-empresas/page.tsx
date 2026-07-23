import type { Metadata } from "next";
import { Content, CtaFinal, EyebrowSmall, PageHero, StepsList, ListCheck } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Parceiro Vivo Empresas — King Services",
  description:
    "Consultoria especializada na comercialização, implantação e gestão de soluções corporativas Vivo Empresas.",
};

export default function VivoEmpresasPage() {
  return (
    <>
      <PageHero
        eyebrow="Parceria estratégica"
        title="Parceira Autorizada Vivo Empresas"
        description="Consultoria especializada na comercialização, implantação e gestão de soluções corporativas Vivo Empresas."
      />
      <Content>
        <div id="beneficios">
          <EyebrowSmall>Benefícios da parceria</EyebrowSmall>
          <ListCheck
            items={[
              "Portfólio completo Vivo Empresas",
              "Consultoria especializada, do diagnóstico à implantação",
              "Atendimento nacional com suporte dedicado",
              "Processo comercial ágil, sem burocracia",
            ]}
          />
        </div>
      </Content>
      <Content tinted>
        <div id="metodologia-vivo">
          <EyebrowSmall>Nossa metodologia</EyebrowSmall>
          <StepsList />
        </div>
      </Content>
      <CtaFinal />
    </>
  );
}
