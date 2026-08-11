import { CONTACT_INFO } from "@/lib/content";

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
    telephone: "+55 17 99715-0462",
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

/**
 * Dados estruturados (JSON-LD) do tipo BreadcrumbList.
 * Recebe os itens já na ordem (do topo até a página atual).
 */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Dados estruturados (JSON-LD) do tipo Service, para páginas de solução. */
export function serviceJsonLd(params: { name: string; description: string; slug: string; specs?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    serviceType: params.name,
    url: absoluteUrl(`/solucoes/${params.slug}`),
    provider: { "@type": "LocalBusiness", "@id": absoluteUrl("/#business"), name: SITE_NAME },
    areaServed: { "@type": "Country", name: "Brasil" },
    ...(params.specs && params.specs.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: params.name,
            itemListElement: params.specs.map((spec) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: spec },
            })),
          },
        }
      : {}),
  };
}
