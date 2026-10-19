import Link from "next/link";
import { KING_IA_CATEGORIES, KING_IA_SOLUTIONS } from "@/lib/content/king-ia";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  atrair: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
  converter: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  atender: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  operar: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  analisar: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  evoluir: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export function KingIASection() {
  const featured = KING_IA_SOLUTIONS.slice(0, 6);

  return (
    <section className="py-16 md:py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              King IA
            </span>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-tight">
              Inteligência Artificial para{" "}
              <span className="text-violet-400">escalar seu negócio</span>
            </h2>
            <p className="text-white/60 mt-3 max-w-lg leading-relaxed text-sm">
              20 soluções de IA e automação para atrair, converter, atender e operar com mais eficiência — em 6 frentes de atuação.
            </p>
          </div>
          <Link
            href="/king-ia"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors border border-violet-400/30 hover:border-violet-300/50 px-5 py-2.5 rounded-pill"
          >
            Ver todas as soluções
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap gap-2 mb-8">
          {KING_IA_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/king-ia#${cat.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/50 hover:border-violet-400/50 hover:text-violet-300 text-[11px] font-semibold transition-colors"
            >
              <span className="opacity-70">{CATEGORY_ICONS[cat.slug]}</span>
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Cards em destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {featured.map((s) => (
            <div
              key={s.slug}
              className="p-5 rounded-xl border border-white/8 bg-white/5 hover:bg-white/10 hover:border-violet-400/30 transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-violet-400/60 uppercase tracking-widest">
                  #{String(s.id).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-white/30 capitalize">{s.category}</span>
              </div>
              <h3 className="font-bold text-sm text-white leading-snug">{s.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/8">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <span className="text-white/30 text-xs">+14 soluções disponíveis</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <Link
            href="/king-ia"
            className="text-xs font-semibold text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
          >
            Explorar portfólio completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
