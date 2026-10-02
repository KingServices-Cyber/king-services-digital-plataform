import { ReactNode } from "react";
import { cn } from "@/design-system";

export function EyebrowSmall({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <span id={id} className={cn("block text-xs font-bold uppercase text-[#660099] mb-2.5", className)}>
      {children}
    </span>
  );
}
