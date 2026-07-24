import { ReactNode } from "react";

export function Content({ children, tinted = false }: { children: ReactNode; tinted?: boolean }) {
  return (
    <div className={tinted ? "bg-mist" : ""}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">{children}</div>
    </div>
  );
}
