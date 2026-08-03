"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "+15", label: "anos de experiência" },
  { value: "+500", label: "empresas atendidas" },
  { value: "24/7", label: "suporte especializado" },
  { value: "100%", label: "atendimento nacional" },
];

export function StatsSection() {
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-16 px-6 bg-surface-secondary">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center p-6 md:p-8 bg-white rounded-xl border border-border transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-text-secondary mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
