import { ReactNode } from "react";
import { ButtonLink } from "./Button";

export function PageHero({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div id={id} className="bg-gradient-to-br from-purple-900 to-purple-600 text-white px-4 md:px-6 py-8 md:py-11">
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[11px] font-semibold border border-white/25 rounded-pill px-2.5 py-1 text-lilac-300">
          {eyebrow}
        </span>
        <h1 className="font-display font-semibold mt-3.5 max-w-[640px] text-[clamp(22px,5vw,30px)]">{title}</h1>
        {description && <p className="mt-3 max-w-[560px] text-white/85 text-sm">{description}</p>}
      </div>
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-display font-semibold text-[clamp(17px,3vw,20px)] text-purple-900 mb-4">{children}</h2>;
}

export function EyebrowSmall({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <span id={id} className="block text-xs font-bold uppercase text-[#8F58C9] mb-2.5">
      {children}
    </span>
  );
}

export function ListCheck({ items }: { items: string[] }) {
  return (
    <ul className="list-none m-0 p-0">
      {items.map((item) => (
        <li key={item} className="text-sm text-graphite py-1.5 flex gap-2">
          <span className="text-lilac-500 font-bold">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

const STEPS = [
  { n: "01", title: "Diagnóstico", desc: "Levantamento das necessidades." },
  { n: "02", title: "Análise", desc: "Estudo da infraestrutura atual." },
  { n: "03", title: "Proposta", desc: "Solução mais adequada." },
  { n: "04", title: "Implantação", desc: "Ativação com acompanhamento." },
  { n: "05", title: "Acompanhamento", desc: "Pós-venda e gestão contínua." },
];

export function StepsList({ withDesc = true }: { withDesc?: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
      {STEPS.map((s) => (
        <div key={s.n} className="border-l-2 border-lilac-300 pl-2.5">
          <span className="font-mono text-purple-600 font-bold text-sm">{s.n}</span>
          <h4 className="font-display font-semibold text-sm my-1">{s.title}</h4>
          {withDesc && <p className="text-xs text-graphite/70">{s.desc}</p>}
        </div>
      ))}
    </div>
  );
}

export function CtaFinal() {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-lilac-500 text-white text-center px-6 py-10">
      <h3 className="font-display font-semibold text-base mb-2">
        Vamos conversar sobre a conectividade da sua empresa?
      </h3>
      <ButtonLink href="/contato" variant="outline" className="!text-white !border-white/50 mt-2 hover:!bg-white/10">
        Fale com um especialista
      </ButtonLink>
    </div>
  );
}

export function Content({ children, tinted = false }: { children: ReactNode; tinted?: boolean }) {
  return (
    <div className={tinted ? "bg-mist" : ""}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">{children}</div>
    </div>
  );
}
