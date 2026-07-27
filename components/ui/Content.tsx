import { ReactNode } from "react";
import { cn } from "@/design-system";

export function Content({
  children,
  tinted = false,
  className,
}: {
  children: ReactNode;
  tinted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(tinted && "bg-mist", className)}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">{children}</div>
    </div>
  );
}
