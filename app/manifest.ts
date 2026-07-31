import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "King Services — Parceira Vivo Empresas",
    short_name: "King Services",
    description:
      "Conectividade e tecnologia para empresas que não podem parar. Parceira Autorizada Vivo Empresas.",
    start_url: "/",
    display: "standalone",
    theme_color: "#2A1240",
    background_color: "#FFFFFF",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
