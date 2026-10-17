import type { Metadata } from "next";
import { TestimonialsPageClient } from "./TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Veja o que empresas de diversos segmentos dizem sobre a KingServices. Mais de 500 clientes satisfeitos em São José do Rio Preto e região.",
};

export default function DepoimentosPage() {
  return <TestimonialsPageClient />;
}
