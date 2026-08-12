"use client";

import { useEffect, useRef, useState } from "react";
import { BENEFITS } from "@/lib/content/plans";
import { Icon } from "@/components/ui/Icons";

export function WhyChooseSection() {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Diferenciais
            </span>
            <h2 className="font-display font-bold text-[clamp(24px,3.5vw,36px)] text-text mt-3 leading-tight">
              Por que escolher a{" "}
              <span className="text-gradient">KingServices</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-md leading-relaxed">
              Conexão estável, atendimento humano e internet de verdade.{" "}
              <span className="font-semibold text-text">Aqui, você é prioridade.</span>
            </p>

            <div className="mt-8 flex items-center gap-4 p-4 bg-primary-50 rounded-xl border border-primary-200">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Icon name="shield" className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-text">Garantia de satisfação</p>
                <p className="text-xs text-text-secondary">Não gostou? Cancele sem multa nos primeiros 7 dias.</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`p-5 rounded-xl border border-border bg-white hover:border-primary-200 hover:shadow-card transition-all duration-300 group ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "0.5s" }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name={benefit.icon} className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-text text-sm">{benefit.title}</h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
