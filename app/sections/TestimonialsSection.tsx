"use client";

import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/content/plans";
import { IconStar } from "@/components/ui/Icons";

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="depoimentos" ref={ref} className="py-16 md:py-24 px-6 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="font-display font-bold text-[clamp(24px,3.5vw,36px)] text-text mt-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-text-secondary mt-3">
            Mais de 500 empresas confiam na KingServices para conectar seus negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`p-6 rounded-xl border border-border bg-white hover:shadow-card transition-all duration-500 flex flex-col ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <IconStar key={j} className="w-4 h-4 text-amber-400" />
                ))}
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
      </div>
    </section>
  );
}
