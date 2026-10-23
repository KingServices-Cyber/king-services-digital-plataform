import Link from "next/link";
import { HeroCarousel } from "@/components/ui/HeroCarousel";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      {/* decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/10 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* ── Coluna esquerda: texto ── */}
          <div>
            <span className="inline-block text-xs font-semibold border border-white/25 rounded-pill px-3 py-1.5 text-white/90 mb-4">
              Parceira Autorizada Vivo Empresas
            </span>

            <h1 className="font-display font-bold text-[clamp(28px,4.5vw,52px)] leading-tight">
              Conectividade e telecomunicações para{" "}
              <span className="text-primary-200">empresas que exigem o melhor.</span>
            </h1>

            <p className="mt-4 text-lg text-white/85 max-w-lg leading-relaxed">
              Internet dedicada, telefonia empresarial e cloud — com suporte especializado 24/7 e instalação sem burocracia.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contato?assunto=plano-pj"
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-pill bg-white text-primary transition-all hover:shadow-mega hover:-translate-y-0.5"
              >
                Solicitar proposta
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="https://wa.me/5517997276024"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-pill bg-transparent border-2 border-white/40 text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <Link
                href="/#planos"
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-pill bg-transparent border-2 border-white/20 text-white/80 transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                Ver Planos
              </Link>
            </div>

            <div className="flex items-center gap-5 mt-8 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Proposta em até 24h
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instalação sem burocracia
              </span>
            </div>
          </div>

          {/* ── Coluna direita: carrossel ── */}
          <div className="hidden md:flex justify-center items-center min-w-0 overflow-hidden">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
