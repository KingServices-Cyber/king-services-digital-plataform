import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Content, EyebrowSmall, PageHero, StepsList } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Sobre — King Services",
  description: "Consultoria especializada em telecomunicações e tecnologia, conectando empresas à solução certa.",
};

const VALORES = ["Ética", "Excelência", "Inovação", "Comprometimento", "Resultado"];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a King Services"
        title="Conectando empresas à tecnologia certa para crescer"
        description="Consultoria especializada em telecomunicações e tecnologia."
      />
      <Content>
        <div id="quem-somos">
          <EyebrowSmall>Quem somos</EyebrowSmall>
          <p className="text-sm max-w-[600px] leading-relaxed">
            Consultoria especializada na comercialização, implantação e gestão de soluções corporativas Vivo
            Empresas.
          </p>
        </div>
      </Content>
      <Content tinted>
        <div id="missao-visao-valores">
          <EyebrowSmall>Missão, Visão e Valores</EyebrowSmall>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {VALORES.map((v) => (
              <Card key={v} clickable={false} center>
                <h3 className="text-xs font-semibold m-0">{v}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Content>
      <Content>
        <div id="metodologia-sobre">
          <EyebrowSmall>Metodologia de trabalho</EyebrowSmall>
          <StepsList withDesc={false} />
        </div>
      </Content>
    </>
  );
}
