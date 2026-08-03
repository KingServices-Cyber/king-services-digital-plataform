"use client";

import { useState } from "react";
import { cn } from "@/design-system";
import { IconChevronDown } from "./Icons";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "border rounded-xl transition-all duration-200",
            openIndex === i
              ? "border-primary bg-primary-50/50 shadow-soft"
              : "border-border bg-white hover:border-primary-200",
          )}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-text pr-4">{item.question}</span>
            <IconChevronDown
              className={cn(
                "w-5 h-5 text-primary shrink-0 transition-transform duration-200",
                openIndex === i && "rotate-180",
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <p className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
