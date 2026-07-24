import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do Cliente",
  description: "Acesse a Área do Cliente King Services.",
  alternates: { canonical: "/login" },
  // Página de autenticação: não deve ser indexada por mecanismos de busca.
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
