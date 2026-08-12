import Link from "next/link";

const chips = [
  { label: "Perfil da empresa", icon: "🏢" },
  { label: "Conectividade", icon: "📡" },
  { label: "Colaboração", icon: "👥" },
  { label: "Segurança digital", icon: "🛡️" },
  { label: "Resultado instantâneo", icon: "📊" },
];

export function DiagnosticoSection() {
  return (
    <section className="bg-hero-gradient-dark py-14 md:py-18 px-6 text-white">
      <div className="max-w-[1280px] mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-pill px-4 py-1.5 text-xs font-semibold text-white/90 mb-5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10" />
            <path d="M12 8v4l3 3" />
            <circle cx="18" cy="6" r="3" fill="currentColor" stroke="none" />
          </svg>
          KingServices AI — Diagnóstico gratuito
        </span>

        <h2 className="font-display font-bold text-[clamp(22px,3.5vw,40px)] leading-tight max-w-2xl mx-auto">
          Descubra o nível de maturidade digital da sua empresa
        </h2>

        <p className="mt-4 text-white/75 text-base max-w-xl mx-auto leading-relaxed">
          Responda 4 perguntas rápidas e receba um diagnóstico personalizado com prioridades claras para crescer com segurança e conectividade.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-7 mb-8">
          {chips.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-pill px-3.5 py-1.5 text-xs text-white/85"
            >
              <span aria-hidden="true">{c.icon}</span>
              {c.label}
            </span>
          ))}
        </div>

        <Link
          href="/diagnostico"
          className="inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-pill bg-white text-primary transition-all hover:shadow-mega hover:-translate-y-0.5"
        >
          Iniciar diagnóstico gratuito
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        <p className="mt-4 text-white/50 text-xs">
          Sem cadastro prévio. Resultado em menos de 3 minutos.
        </p>
      </div>
    </section>
  );
}
