"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/design-system";

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
  className,
  style,
}: {
  href?: string;
  children: ReactNode;
  center?: boolean;
  clickable?: boolean;
  className?: string;
  style?: CSSProperties;
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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const innerClasses = cn(
    "border border-fog rounded-card p-4 bg-white transition-all duration-200 h-full",
    clickable
      ? "cursor-pointer hover:border-lilac-500 hover:shadow-card hover:-translate-y-1 block"
      : "cursor-default",
    center && "text-center",
    className,
  );

  return (
    <div ref={ref} className={cn("reveal", inView && "in-view")} style={style}>
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
