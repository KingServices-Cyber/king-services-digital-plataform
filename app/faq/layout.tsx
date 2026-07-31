import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Perguntas frequentes sobre os serviços King Services, parceria Vivo Empresas, suporte técnico e Área do Cliente.",
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
