import type { Metadata } from "next";
import { Card, Content, PageHero } from "@/components/ui";
import { SOLUTIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluções",
  alternates: { canonical: "/solucoes" },
  description:
    "Conheça o portfólio completo de soluções da King Services, parceira autorizada Vivo Empresas.",
};

export default function SolucoesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Tecnologia sob medida para cada etapa do seu negócio"
        description="Telefonia, internet, cloud e segurança — tudo com o suporte de quem entende o seu negócio."
      />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(SOLUTIONS).map((s) => (
            <Card key={s.slug} href={`/solucoes/${s.slug}`} highlight>
              <h3 className="font-display font-semibold text-sm mb-1 transition-colors duration-300 group-hover:text-white">
                {s.title}
              </h3>
              <p className="text-xs text-graphite/70 transition-colors duration-300 group-hover:text-white/85">
                {s.desc.slice(0, 70)}...
              </p>
            </Card>
          ))}
        </div>
      </Content>
    </>
  );
}
