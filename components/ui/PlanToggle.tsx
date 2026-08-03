"use client";

import { cn } from "@/design-system";

export function PlanToggle({
  value,
  onChange,
}: {
  value: "monthly" | "annual";
  onChange: (v: "monthly" | "annual") => void;
}) {
  return (
    <div className="inline-flex items-center bg-surface-secondary border border-border rounded-pill p-1">
      <button
        type="button"
        className={cn(
          "px-5 py-2 rounded-pill text-sm font-semibold transition-all duration-200",
          value === "monthly"
            ? "bg-primary text-white shadow-soft"
            : "text-text-secondary hover:text-text",
        )}
        onClick={() => onChange("monthly")}
      >
        Plano Mensal
      </button>
      <button
        type="button"
        className={cn(
          "px-5 py-2 rounded-pill text-sm font-semibold transition-all duration-200",
          value === "annual"
            ? "bg-primary text-white shadow-soft"
            : "text-text-secondary hover:text-text",
        )}
        onClick={() => onChange("annual")}
      >
        Plano Anual
      </button>
    </div>
  );
}
