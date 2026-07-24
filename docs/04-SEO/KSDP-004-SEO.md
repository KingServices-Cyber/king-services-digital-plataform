# SEO — King Services Digital Platform

Estratégia e implementação de SEO técnico da plataforma.

## URL canônica

A URL base do site é definida por `NEXT_PUBLIC_SITE_URL` (padrão:
`https://www.kingservices.com.br`) e centralizada em `lib/seo.ts`. Todo o SEO
técnico deriva dessa constante.

## Metadata

- `metadataBase` e um template de título (`%s — King Services`) são definidos
  no `app/layout.tsx`, aplicando-se a todas as páginas.
- Cada página define seu próprio `title`, `description` e `canonical`.
- Páginas client (`/contato`, `/login`) recebem metadata via `layout.tsx`
  dedicado, já que client components não exportam `metadata`.
- A `/login` é marcada como `noindex` (área de autenticação).

## Canonical

Cada rota define seu próprio `alternates.canonical`. **Não** há canonical
global no layout, pois no Next.js esse campo é herdado — um canonical global
faria todas as páginas apontarem para a home.

## Open Graph e Twitter

Definidos como padrão no layout (tipo `website`, locale `pt_BR`, imagem
padrão) e sobrescritos por página quando relevante (soluções e segmentos
individuais).

## Sitemap e robots

- `app/sitemap.ts` gera `/sitemap.xml` com todas as rotas estáticas e as rotas
  dinâmicas de soluções e segmentos, com prioridades e frequências de
  atualização.
- `app/robots.ts` gera `/robots.txt`, libera o rastreamento geral, bloqueia
  `/login` e aponta para o sitemap.

## Dados estruturados (JSON-LD)

O `app/layout.tsx` injeta dois blocos JSON-LD em todas as páginas
(gerados em `lib/seo.ts`):

- **LocalBusiness** — nome, descrição, endereço, telefone, e-mail e área
  atendida, para SEO local.
- **WebSite** — identidade do site, vinculada ao `LocalBusiness`.

## Próximos passos sugeridos

- Gerar uma imagem Open Graph dedicada (1200×630) em vez de reutilizar o logo.
- Adicionar JSON-LD `Service` por solução e `BreadcrumbList` nas rotas
  dinâmicas.
- Cadastrar o site no Google Search Console e enviar o sitemap.
