"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  prefix?: string;
  number?: number;
  suffix?: string;
  static?: string;
  label: string;
};

const STATS: Stat[] = [
  { prefix: "+", number: 15, label: "anos de experiência" },
  { prefix: "+", number: 500, label: "empresas atendidas" },
  { static: "24/7", label: "suporte especializado" },
  { number: 100, suffix: "%", label: "atendimento nacional" },
];

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatCard({ stat, inView, delay }: { stat: Stat; inView: boolean; delay: number }) {
  const count = useCountUp(stat.number ?? 0, inView && stat.number !== undefined);

  const display = stat.static
    ? stat.static
    : `${stat.prefix ?? ""}${inView ? count : 0}${stat.suffix ?? ""}`;

  return (
    <div
      className={`group relative text-center p-6 md:p-8 bg-white rounded-xl border-2 cursor-default
        border-border hover:border-primary
        shadow-sm hover:shadow-elevated
        transition-all duration-300 ease-out
        hover:-translate-y-2
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* glow ring on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-2 ring-primary/20" />

      <p className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">
        {display}
      </p>
      <p className="text-sm text-text-secondary mt-2 leading-snug">{stat.label}</p>
    </div>
  );
}

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
            <StatCard key={s.label} stat={s} inView={inView} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
