import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com um especialista KingServices. Conectividade e tecnologia para empresas: " +
    "telefonia, internet empresarial, cloud e segurança digital.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato — KingServices",
    description: "Fale com um especialista KingServices.",
    url: "/contato",
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
