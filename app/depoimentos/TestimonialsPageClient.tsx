"use client";

import { useState } from "react";
import Link from "next/link";
import { TESTIMONIALS, type TestimonialSegment } from "@/lib/content/plans";
import { IconStar } from "@/components/ui/Icons";

const SEGMENTS: TestimonialSegment[] = [
  "Todos",
  "Indústria",
  "Comércio",
  "Logística",
  "Advocacia",
  "Saúde",
  "Tecnologia",
  "Educação",
  "Serviços",
];

export function TestimonialsPageClient() {
  const [active, setActive] = useState<TestimonialSegment>("Todos");

  const filtered =
    active === "Todos"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.segment === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary py-16 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-200 mb-4 bg-white/10 px-3 py-1 rounded-full">
            Depoimentos
          </span>
          <h1 className="font-display font-bold text-[clamp(28px,4vw,48px)] text-white leading-tight max-w-2xl">
            O que nossos clientes dizem
          </h1>
          <p className="text-primary-200 mt-4 text-lg max-w-xl">
            Mais de 500 empresas confiam na KingServices para conectar seus negócios. Veja experiências reais de diferentes segmentos.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm font-semibold">5,0 média</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
              <span className="text-white text-sm font-semibold">{TESTIMONIALS.length} avaliações</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
              <span className="text-white text-sm font-semibold">8 segmentos atendidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros + Grid */}
      <section className="py-14 px-6">
        <div className="max-w-[1280px] mx-auto">

          {/* Filtro por segmento */}
          <div className="flex flex-wrap gap-2 mb-10">
            {SEGMENTS.map((seg) => (
              <button
                key={seg}
                type="button"
                onClick={() => setActive(seg)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  active === seg
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-text border-border hover:border-primary hover:text-primary"
                }`}
              >
                {seg}
                {seg !== "Todos" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({TESTIMONIALS.filter((t) => t.segment === seg).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid de depoimentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-xl border border-border bg-white hover:shadow-card transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <IconStar key={j} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary-50 px-2.5 py-0.5 rounded-full">
                    {t.segment}
                  </span>
                </div>

                <p className="text-sm text-text leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border-light">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-secondary">
              Nenhum depoimento encontrado para este segmento.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-[clamp(22px,3vw,32px)] text-white mb-4">
            Faça parte dos nossos casos de sucesso
          </h2>
          <p className="text-primary-200 mb-8">
            Entre em contato e descubra a solução ideal para a sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="inline-block font-bold px-6 py-3 rounded-pill bg-white text-primary hover:bg-primary-50 transition-colors"
            >
              Falar com um especialista
            </Link>
            <Link
              href="/planos/para-empresas"
              className="inline-block font-bold px-6 py-3 rounded-pill border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Ver planos empresariais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
