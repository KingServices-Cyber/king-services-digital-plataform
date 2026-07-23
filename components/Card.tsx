"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Card com animação leve de entrada (fade + rise) ao rolar a tela até ele.
 * Usa IntersectionObserver — a mesma técnica validada no preview HTML (Passo 2).
 * Respeita prefers-reduced-motion automaticamente via globals.css.
 *
 * Sempre renderiza um <div> wrapper (observado pelo IntersectionObserver) para
 * evitar problemas de tipagem de ref entre <div> e o componente <Link>.
 */
export function Card({
  href,
  children,
  center = false,
  clickable = true,
}: {
  href?: string;
  children: ReactNode;
  center?: boolean;
  clickable?: boolean;
}) {
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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const innerClasses = `border border-fog rounded-card p-4 bg-white transition-all duration-200 h-full ${
    clickable ? "cursor-pointer hover:border-lilac-500 hover:shadow-card hover:-translate-y-1 block" : "cursor-default"
  } ${center ? "text-center" : ""}`;

  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      {href ? (
        <Link href={href} className={innerClasses}>
          {children}
        </Link>
      ) : (
        <div className={innerClasses}>{children}</div>
      )}
    </div>
  );
}
