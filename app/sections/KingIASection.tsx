import Link from "next/link";

export function KingIASection() {
  return (
    <section className="py-8 px-6 bg-[#0d0d14]">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            King IA
          </span>
          <h2 className="font-display font-bold text-lg md:text-xl text-white leading-snug">
            Inteligência Artificial para{" "}
            <span className="text-violet-400">escalar seu negócio</span>
          </h2>
          <p className="text-white/50 text-sm mt-1">
            20 soluções de IA e automação — 6 frentes de atuação para empresas de todos os portes.
          </p>
        </div>
        <Link
          href="/king-ia"
          className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors border border-violet-400/30 hover:border-violet-300/50 px-5 py-2.5 rounded-pill whitespace-nowrap"
        >
          Conheça o King IA
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
