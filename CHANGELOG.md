# Changelog — Baseline Consolidada

## v1.0 — 2026-07-23

Unificação das pastas `KSDP-Release-0.2` e `KSDP-Release-0.3` (e dos stubs de
`docs/` na raiz de `KSDP-Sprint1-Entrega1`) em uma única Baseline Consolidada,
após verificação de duplicidade de arquivos.

### O que foi encontrado

- **35 arquivos idênticos byte-a-byte** entre `KSDP-Release-0.2` e
  `KSDP-Release-0.3` (README, todas as páginas em `app/`, todos os
  componentes, `lib/*`, configs do Next.js/Tailwind/TS, `public/logo.png`,
  `documentacao/DOCUMENTACAO-Fase1-revisao__1_.md` e o preview HTML). Eram
  cópias exatas mantidas nas duas pastas de release — duplicidade real.
- **Release 0.3 adicionava** 5 arquivos que não existiam na 0.2:
  - `app/centro-conhecimento/page.tsx`
  - `components/ui/Button.tsx`, `components/ui/CategoryCard.tsx`, `components/ui/SectionTitle.tsx`
  - `design-system/tokens.json`
- **Release 0.3, porém, não trazia** a pasta `nextjs-project/docs/`
  (Blueprint, Arquitetura, Design System, SEO, ADR-001, README de docs) que
  só existia na 0.2 — ou seja, ficaria perdida caso 0.3 fosse tratada como
  substituta direta da 0.2.
- Na raiz de `KSDP-Sprint1-Entrega1/docs/` havia **stubs duplicados e
  divergentes** de `KSDP-001-Blueprint.md` e `KSDP-002-Arquitetura.md`
  (texto mais curto e genérico) conflitando com as versões dentro de
  `nextjs-project/docs/` da 0.2. Também havia um `CHANGELOG.md` vazio na raiz.

### O que foi feito

- Base de código: usada a versão da **0.3** (superset funcional — inclui os
  componentes de UI e design tokens que a 0.2 não tinha).
- Pasta `nextjs-project/docs/` restaurada a partir da **0.2** (a versão mais
  completa: Blueprint, Arquitetura, Design System, SEO, ADR-001), já que a
  0.3 a havia perdido.
- Os stubs de `KSDP-001`/`KSDP-002` na raiz de `docs/` (fora desta baseline)
  ficam **superados** pelos arquivos equivalentes, mais completos, em
  `nextjs-project/docs/` — mantidos no lugar original até confirmação do
  responsável pelo projeto sobre remoção definitiva.
- Os 35 arquivos idênticos passam a existir em **uma única cópia** dentro
  desta baseline, eliminando a redundância entre `KSDP-Release-0.2` e
  `KSDP-Release-0.3`.
- `KSDP-Release-0.2/` e `KSDP-Release-0.3/` foram mantidas intactas como
  histórico de releases (não foram apagadas); esta pasta
  `Baseline-Consolidada-v1.0/` é a referência única e atual para uso.

### Pendências para uma próxima revisão de conteúdo

- Os textos em `nextjs-project/docs/*` ainda são placeholders curtos
  (ex.: "Estrutura inicial.", "Estratégia inicial.") — precisam ser
  desenvolvidos com conteúdo real antes de uma v1.1.
- `npm install` / `npm run dev` ainda não foram executados neste ambiente
  (mesma observação já registrada no README original).
