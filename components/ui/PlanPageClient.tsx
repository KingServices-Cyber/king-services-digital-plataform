"use client";

import { useState } from "react";
import type { Plan } from "@/lib/content/plans";
import { PlanCard } from "@/components/ui/PlanCard";
import { PlanToggle } from "@/components/ui/PlanToggle";

export function PlanPageClient({ plans }: { plans: Plan[] }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <div className="flex justify-center mb-10">
        <PlanToggle value={billingCycle} onChange={setBillingCycle} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} index={i} />
        ))}
      </div>
    </>
  );
}
