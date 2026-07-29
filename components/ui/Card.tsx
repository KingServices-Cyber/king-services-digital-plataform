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
  highlight = false,
  className,
  style,
}: {
  href?: string;
  children: ReactNode;
  center?: boolean;
  clickable?: boolean;
  /** Ao passar o mouse, preenche o card com um fundo escuro (efeito de "destaque"). */
  highlight?: boolean;
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
    "group relative overflow-hidden border border-fog rounded-card p-4 bg-white transition-all duration-200 h-full",
    clickable
      ? "cursor-pointer hover:border-lilac-500 hover:shadow-card hover:-translate-y-1 block"
      : "cursor-default",
    center && "text-center",
    className,
  );

  const content = (
    <>
      {highlight && (
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-b from-purple-900 to-purple-600 transition-transform duration-300 ease-out group-hover:scale-y-100"
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </>
  );

  return (
    <div ref={ref} className={cn("reveal", inView && "in-view")} style={style}>
      {href ? (
        <Link href={href} className={innerClasses}>
          {content}
        </Link>
      ) : (
        <div className={innerClasses}>{content}</div>
      )}
    </div>
  );
}
