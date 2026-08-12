import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico de Maturidade Digital",
  description:
    "Descubra o nível de maturidade digital da sua empresa em menos de 3 minutos. Diagnóstico gratuito da KingServices AI com recomendações personalizadas.",
  alternates: { canonical: "/diagnostico" },
};

export default function DiagnosticoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
