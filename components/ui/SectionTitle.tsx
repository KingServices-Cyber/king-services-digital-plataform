import { ReactNode } from "react";
import { cn } from "@/design-system";

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-semibold text-[clamp(18px,3vw,26px)] text-[#660099] mb-4",
        className,
      )}
    >
      {children}
    </h2>
  );
}
