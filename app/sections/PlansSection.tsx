"use client";

import { useState } from "react";
import { PLANS } from "@/lib/content/plans";
import { PlanCard } from "@/components/ui/PlanCard";
import { PlanToggle } from "@/components/ui/PlanToggle";

export function PlansSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="planos" className="py-16 md:py-24 px-6 bg-surface-secondary scroll-mt-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nossos Planos
          </span>
          <h2 className="font-display font-bold text-[clamp(24px,3.5vw,36px)] text-text mt-3">
            Planos que se adaptam ao seu estilo de vida
          </h2>
          <p className="text-text-secondary mt-3">
            Oferecemos diversas opções de planos de internet para atender desde usuários domésticos até grandes empresas,
            com velocidades que vão de 50 Mbps até 500 Mbps.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <PlanToggle value={billingCycle} onChange={setBillingCycle} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
