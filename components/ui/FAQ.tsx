"use client";

import { useState } from "react";
import { cn } from "@/design-system";
import { IconChevronDown } from "./Icons";

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

type FAQProps = {
  items: FAQItem[];
  showCategories?: boolean;
};

export function FAQ({ items, showCategories = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = showCategories
    ? Array.from(new Set(items.map((i) => i.category).filter(Boolean))) as string[]
    : [];

  const filtered = activeCategory
    ? items.filter((i) => i.category === activeCategory)
    : items;

  return (
    <div className="max-w-3xl mx-auto">
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            type="button"
            onClick={() => { setActiveCategory(null); setOpenIndex(null); }}
            className={cn(
              "text-xs font-semibold px-3.5 py-2 rounded-pill border transition-colors",
              !activeCategory
                ? "bg-primary text-white border-primary"
                : "border-border text-text-secondary hover:border-primary hover:text-primary",
            )}
          >
            Todas ({items.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={cn(
                "text-xs font-semibold px-3.5 py-2 rounded-pill border transition-colors",
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-border text-text-secondary hover:border-primary hover:text-primary",
              )}
            >
              {cat} ({items.filter((i) => i.category === cat).length})
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {filtered.map((item, i) => (
          <div
            key={`${item.category}-${i}`}
            className={cn(
              "border rounded-xl transition-all duration-200",
              openIndex === i
                ? "border-primary bg-primary-50/50 shadow-soft"
                : "border-primary/20 bg-white hover:border-primary/50 hover:shadow-soft",
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
    </div>
  );
}
