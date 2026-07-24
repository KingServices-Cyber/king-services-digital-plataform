import { CONTACT_INFO } from "@/lib/data";

/**
 * URL canônica do site em produção. Pode ser sobrescrita por ambiente
 * (ex.: previews da Vercel) via NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kingservices.com.br").replace(
  /\/$/,
  "",
);

export const SITE_NAME = "King Services";

export const SITE_TAGLINE = "Parceira Autorizada Vivo Empresas";

export const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const DEFAULT_DESCRIPTION =
  "King Services — Parceira Autorizada Vivo Empresas. Conectividade e tecnologia para " +
  "empresas que não podem parar: telefonia móvel, internet empresarial, PABX, cloud e " +
  "segurança digital.";

/** Imagem padrão para Open Graph / Twitter (compartilhamento em redes sociais). */
export const DEFAULT_OG_IMAGE = "/logo.png";

/** Converte um caminho relativo em URL absoluta baseada em SITE_URL. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Dados estruturados (JSON-LD) do tipo LocalBusiness para SEO local.
 * Ajuda mecanismos de busca a entender a empresa, endereço e contato.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    telephone: "+55 17 99727-6024",
    email: CONTACT_INFO.email,
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "Brasil" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Souza Barros, nº75 — Vila Aurora",
      addressLocality: "São José do Rio Preto",
      addressRegion: "SP",
      postalCode: "15014-380",
      addressCountry: "BR",
    },
    sameAs: [] as string[],
  };
}

/** Dados estruturados (JSON-LD) do tipo WebSite. */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
    publisher: { "@id": absoluteUrl("/#business") },
  };
}
