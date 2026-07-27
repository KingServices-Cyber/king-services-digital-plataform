import { cn } from "@/design-system";

const STEPS = [
  { n: "01", title: "Diagnóstico", desc: "Levantamento das necessidades." },
  { n: "02", title: "Análise", desc: "Estudo da infraestrutura atual." },
  { n: "03", title: "Proposta", desc: "Solução mais adequada." },
  { n: "04", title: "Implantação", desc: "Ativação com acompanhamento." },
  { n: "05", title: "Acompanhamento", desc: "Pós-venda e gestão contínua." },
];

export function StepsList({
  withDesc = true,
  className,
}: {
  withDesc?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5", className)}>
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
