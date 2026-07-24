import { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-semibold text-[clamp(17px,3vw,20px)] text-purple-900 mb-4">
      {children}
    </h2>
  );
}
