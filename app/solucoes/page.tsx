import type { Metadata } from "next";
import { Card, Content, CtaFinal, PageHero } from "@/components/ui";
import { SOLUTIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluções",
  alternates: { canonical: "/solucoes" },
  description:
    "Conheça o portfólio completo de soluções da KingServices, parceira autorizada Vivo Empresas.",
};

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  "telefonia-movel": (
    <svg className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  "internet-empresarial": (
    <svg className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "telefonia-fixa-pabx": (
    <svg className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  cloud: (
    <svg className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  "seguranca-digital": (
    <svg className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  iot: (
    <svg className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.values(SOLUTIONS).map((s) => (
            <Card key={s.slug} href={`/solucoes/${s.slug}`} highlight>
              <div className="flex flex-col gap-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                  {SOLUTION_ICONS[s.slug]}
                </div>
                <h3 className="font-display font-bold text-base m-0 transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed m-0 flex-1 transition-colors duration-300 group-hover:text-white/85">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border group-hover:border-white/20 transition-colors duration-300">
                  {s.specs.slice(0, 4).map((spec) => (
                    <span
                      key={spec}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary-50 text-primary font-medium group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Content>
      <CtaFinal />
    </>
  );
}
