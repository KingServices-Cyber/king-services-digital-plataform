import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel de Leads",
  // Área interna: nunca deve ser indexada.
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
