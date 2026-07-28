import type { Metadata } from "next";
import { ClientPortalShell } from "@/components/portal/ClientPortalShell";

export const metadata: Metadata = {
  title: "Área do Cliente",
  // Área interna: nunca deve ser indexada.
  robots: { index: false, follow: false },
};

export default function AreaClienteLayout({ children }: { children: React.ReactNode }) {
  return <ClientPortalShell>{children}</ClientPortalShell>;
}
