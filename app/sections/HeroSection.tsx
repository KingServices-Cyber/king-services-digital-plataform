import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/20 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/10 translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold border border-white/25 rounded-pill px-3 py-1.5 text-white/90 mb-4">
            Parceira Autorizada Vivo Empresas
          </span>

          <h1 className="font-display font-bold text-[clamp(28px,5vw,48px)] leading-tight">
            Internet rápida, estável e confiável para sua{" "}
            <span className="text-primary-200">casa e empresa.</span>
          </h1>

          <p className="mt-4 text-lg text-white/85 max-w-lg leading-relaxed">
            Conecte-se ao futuro com nosso serviço de internet de alta velocidade e suporte dedicado 24/7.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-pill bg-white text-primary transition-all hover:shadow-mega hover:-translate-y-0.5"
            >
              Contrate Agora
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/#planos"
              className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-pill bg-transparent border-2 border-white/40 text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Ver Planos
            </Link>
          </div>

          <div className="flex items-center gap-5 mt-8 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Faça um teste grátis
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Fale com um especialista
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
