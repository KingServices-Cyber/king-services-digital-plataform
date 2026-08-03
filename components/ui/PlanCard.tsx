"use client";

import Link from "next/link";
import { cn } from "@/design-system";
import type { Plan } from "@/lib/content/plans";

export function PlanCard({
  plan,
  billingCycle,
  index = 0,
}: {
  plan: Plan;
  billingCycle: "monthly" | "annual";
  index?: number;
}) {
  const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual;
  const [intPart, decPart] = price.toFixed(2).split(".");

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border-2 p-6 transition-all duration-300 bg-white",
        plan.highlighted
          ? "border-primary shadow-elevated scale-[1.03] z-10"
          : "border-border hover:border-primary-200 hover:shadow-card",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {plan.badge && (
        <span
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-pill text-xs font-bold",
            plan.highlighted
              ? "bg-primary text-white"
              : "bg-primary-50 text-primary",
          )}
        >
          {plan.badge}
        </span>
      )}

      <div className="text-center mb-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-text-secondary">Plano</p>
        <h3
          className={cn(
            "text-2xl font-display font-bold mt-1",
            plan.highlighted ? "text-primary" : "text-text",
          )}
        >
          {plan.name}
        </h3>
        <p className="text-sm text-text-secondary mt-1">{plan.subtitle}</p>
      </div>

      <div className="text-center py-3 border-t border-b border-border-light">
        <p className="text-lg font-bold text-primary">{plan.speed}</p>
      </div>

      <ul className="flex flex-col gap-2.5 mt-5 mb-6 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
            <svg
              className="w-4 h-4 text-primary mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="text-center mb-4">
        <p className="text-3xl font-display font-bold text-text">
          R${intPart}
          <span className="text-lg">,{decPart}/mês</span>
        </p>
        {billingCycle === "annual" && (
          <p className="text-xs text-primary mt-1 font-medium">
            Economia de R${((plan.priceMonthly - plan.priceAnnual) * 12).toFixed(0)}/ano
          </p>
        )}
      </div>

      <Link
        href="/contato"
        className={cn(
          "block text-center font-bold text-sm py-3 rounded-pill transition-all duration-200 hover:-translate-y-0.5",
          plan.highlighted
            ? "bg-primary text-white hover:bg-primary-600 hover:shadow-elevated"
            : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
        )}
      >
        Contrate Agora
      </Link>
    </div>
  );
}
