import { ReactNode } from "react";

export function EyebrowSmall({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <span id={id} className="block text-xs font-bold uppercase text-[#8F58C9] mb-2.5">
      {children}
    </span>
  );
}
