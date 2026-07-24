# King Services Digital Platform (KSDP)

## Sobre o Projeto

A King Services Digital Platform (KSDP) é a plataforma digital oficial da King Services.

Este projeto reúne:

- Website Corporativo
- Centro de Conhecimento
- Design System
- Ferramentas Empresariais
- SEO Enterprise
- Conteúdo Técnico
- Documentação do Projeto

---

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase (banco de dados e autenticação)

---

## Configuração local

```bash
# 1. Instale as dependências
npm install

# 2. Configure as variáveis de ambiente
cp .env.example .env.local
# edite .env.local com a URL e a chave do Supabase (veja supabase/README.md)

# 3. Rode em desenvolvimento
npm run dev
```

Scripts disponíveis: `dev`, `build`, `start`, `lint`, `typecheck`, `format`.

O backend (tabela de leads, políticas de segurança e autenticação) está
documentado em [`supabase/README.md`](./supabase/README.md).

### Conteúdo do Blog (MDX)

Os artigos ficam em `content/blog/*.mdx`. Para publicar um novo artigo, crie um
arquivo `.mdx` com o frontmatter abaixo — ele aparece automaticamente na
listagem, no sitemap e ganha sua própria página em `/blog/<slug>`:

```mdx
---
title: "Título do artigo"
description: "Resumo curto para listagem e SEO."
category: "Internet Empresarial"
date: "2026-07-24"
author: "King Services"
---

Conteúdo em Markdown/MDX (títulos, listas, tabelas...).
```

---

## Status

Versão: Baseline v1.0

Sprint Atual: Sprint 2
