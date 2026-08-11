"use client";
// PlansSection v2 — pfPlans/pjPlans audience toggle
import { useState } from "react";
import Link from "next/link";
import type { Plan } from "@/lib/content/plans";
import { PlanCard } from "@/components/ui/PlanCard";
import { PlanToggle } from "@/components/ui/PlanToggle";

type Props = { pfPlans: Plan[]; pjPlans: Plan[] };

export function PlansSection({ pfPlans, pjPlans }: Props) {
  const [audience, setAudience] = useState<"pf" | "pj">("pf");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = (audience === "pf" ? pfPlans : pjPlans) ?? [];
  const pageHref = audience === "pf" ? "/planos/para-voce" : "/planos/para-empresas";

  return (
    <section id="planos" className="py-16 md:py-24 px-6 bg-surface-secondary scroll-mt-24">
      <div className="max-w-[1280px] mx-auto">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nossos Planos
          </span>
          <h2 className="font-display font-bold text-[clamp(24px,3.5vw,36px)] text-text mt-3">
            Planos para cada perfil
          </h2>
          <p className="text-text-secondary mt-3">
            Escolha entre planos residenciais para pessoa física ou soluções empresariais para PME e grandes corporações.
          </p>
        </div>

        {/* Seletor de audiência */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-2xl border-2 border-primary p-1 gap-1 bg-white shadow-soft">
            <button
              type="button"
              onClick={() => setAudience("pf")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                audience === "pf"
                  ? "bg-primary text-white shadow-md"
                  : "text-primary hover:bg-primary-50"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Para Você
            </button>
            <button
              type="button"
              onClick={() => setAudience("pj")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                audience === "pj"
                  ? "bg-primary text-white shadow-md"
                  : "text-primary hover:bg-primary-50"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              Para Empresas
            </button>
          </div>
        </div>

        {/* Subtítulo dinâmico */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-text-secondary mb-6">
          {audience === "pf"
            ? "Planos residenciais para pessoa física (CPF)"
            : "Soluções para PME e grandes corporações (CNPJ)"}
        </p>

        {/* Toggle mensal / anual */}
        <div className="flex justify-center mb-10">
          <PlanToggle value={billingCycle} onChange={setBillingCycle} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} index={i} />
          ))}
        </div>

        {/* CTA para página completa */}
        <div className="text-center mt-10">
          <Link
            href={pageHref}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:text-primary-600 transition-colors"
          >
            Ver todos os planos {audience === "pf" ? "Para Você" : "Para Empresas"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
