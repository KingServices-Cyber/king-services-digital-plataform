import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com um especialista King Services. Conectividade e tecnologia para empresas: " +
    "telefonia, internet empresarial, cloud e segurança digital.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato — King Services",
    description: "Fale com um especialista King Services.",
    url: "/contato",
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
