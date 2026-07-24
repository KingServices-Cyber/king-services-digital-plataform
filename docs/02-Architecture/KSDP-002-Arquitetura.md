# Arquitetura — King Services Digital Platform

## Stack

| Camada              | Tecnologia                                                       |
| ------------------- | ---------------------------------------------------------------- |
| Framework           | Next.js 14 (App Router)                                          |
| Linguagem           | TypeScript                                                       |
| Estilo              | Tailwind CSS                                                     |
| Conteúdo            | MDX (`content/blog/*.mdx`) via `next-mdx-remote` + `gray-matter` |
| Backend             | Supabase (Postgres, Auth, Edge Functions)                        |
| E-mail transacional | Resend, via Edge Function                                        |
| CI                  | GitHub Actions (format, lint, typecheck, build)                  |

## Estrutura de pastas

```
app/                    rotas (App Router) — uma pasta por página/segmento
components/
  ui/                   primitivos de design system (Button, Card, PageHero...)
  layout/               estrutura do site (Header, Footer)
content/blog/           artigos do Centro de Conhecimento (MDX)
lib/
  content/              dados de conteúdo (soluções, segmentos, navegação, blog)
  supabase/              cliente Supabase (browser)
  seo.ts, masks.ts,      infraestrutura/utilitários
  database.types.ts
design-system/          tokens.json (espelha tailwind.config.ts)
supabase/
  migrations/           schema versionado (SQL)
  functions/             Edge Functions (Deno)
docs/                   esta documentação
```

### Por que `components/ui` vs `components/layout`

- **`ui/`**: peças reutilizáveis dentro do conteúdo de qualquer página
  (botões, cards, títulos de seção, hero, CTA). Reexportadas por
  `components/ui/index.ts` para imports únicos (`from "@/components/ui"`).
- **`layout/`**: estrutura fixa do site, presente uma vez por página
  (`Header`, `Footer`), consumida a partir de `app/layout.tsx`.

### Por que `lib/content` é separado do resto de `lib/`

`lib/content/` reúne os dados de domínio do site (soluções, segmentos,
navegação, artigos). O restante de `lib/` é infraestrutura reutilizável
(SEO, máscaras de formulário, tipos do banco, cliente Supabase).

**Atenção:** `lib/content/blog.ts` usa `node:fs`/`node:path` para ler os
arquivos MDX em tempo de build/request — por isso é **server-only** e
**não é reexportado** pelo barrel `lib/content/index.ts` (que só reexporta
`data.ts` e `nav.ts`, seguros para client components). Importe `blog.ts`
sempre pelo caminho direto (`@/lib/content/blog`), nunca pelo barrel —
caso contrário o bundler tenta incluir `node:fs` no bundle do navegador e o
build falha.

## Renderização

- Páginas estáticas (Home, Soluções, Segmentos, Sobre etc.) são Server
  Components, pré-renderizadas em build (`generateStaticParams` nas rotas
  dinâmicas de Soluções/Segmentos/Blog).
- `/contato`, `/login` e `/admin` são Client Components (`"use client"`),
  pois dependem de estado do navegador e do SDK do Supabase.
- `app/opengraph-image.tsx` gera a imagem de compartilhamento (Open Graph)
  dinamicamente via `next/og`, sem depender de um arquivo estático.

## Backend (Supabase)

Documentado em detalhe em [`supabase/README.md`](../../supabase/README.md):
schema da tabela `leads`, políticas de RLS, autenticação, painel interno e o
pipeline de notificação por e-mail (trigger → `pg_net` → Edge Function →
Resend).

## CI

`.github/workflows/ci.yml` roda em cada push/PR para `main`:
`format:check` → `lint` → `typecheck` → `build`.
