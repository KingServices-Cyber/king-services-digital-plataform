# Design System — King Services Digital Platform

Fonte de verdade: [`design-system/tokens.json`](../../design-system/tokens.json),
espelhado em [`tailwind.config.ts`](../../tailwind.config.ts). Os dois arquivos
devem ser mantidos em sincronia — qualquer alteração de cor/tipografia entra
nos dois.

## Cores

| Token        | Hex       | Uso                                              |
| ------------ | --------- | ------------------------------------------------ |
| `purple-900` | `#2A1240` | Fundo de heros, texto de maior contraste         |
| `purple-600` | `#5B2A8C` | Cor primária da marca (botões, links, destaques) |
| `purple-700` | `#4A2172` | Variante de texto/borda sobre fundo claro        |
| `lilac-500`  | `#A873E0` | Gradiente secundário, ícones de destaque         |
| `lilac-300`  | `#C9A0F0` | Texto sobre fundo escuro (eyebrows, tags)        |
| `graphite`   | `#2A2438` | Texto padrão do corpo                            |
| `mist`       | `#F7F6FA` | Fundo alternado de seções (tinted)               |
| `fog`        | `#D8D3E0` | Bordas                                           |

## Tipografia

- **Display** (`font-display`, Poppins): títulos e destaques.
- **Body** (`font-body`, Inter): texto corrido.

## Raios e sombras

- `rounded-card` (16px): cards e painéis.
- `rounded-pill` (999px): botões e badges.
- `shadow-card`, `shadow-header`, `shadow-mega`: profundidade em tons de roxo,
  nunca cinza puro — reforça a identidade da marca mesmo nas sombras.

## Componentes (`components/ui/`)

| Componente                      | Uso                                                                         |
| ------------------------------- | --------------------------------------------------------------------------- |
| `Button` / `ButtonLink`         | Ação primária/secundária/ghost, com variantes `primary`, `outline`, `ghost` |
| `Card`                          | Bloco clicável com animação de entrada (IntersectionObserver)               |
| `PageHero`                      | Cabeçalho de página interna (gradiente roxo, eyebrow + título)              |
| `SectionTitle` / `EyebrowSmall` | Hierarquia tipográfica dentro de uma seção                                  |
| `Content`                       | Wrapper de largura máxima (1280px) com opção `tinted` (fundo `mist`)        |
| `CtaFinal`                      | Bloco de chamada para ação ao fim da página                                 |
| `ListCheck` / `StepsList`       | Listas com marcador de check / processo numerado                            |
| `WhatsAppLink`                  | Link para WhatsApp com ícone                                                |

Estrutura fixa do site em `components/layout/`: `Header` (navegação com
mega-menu) e `Footer`.

## Acessibilidade

- Skip link (`.skip-link` em `globals.css`) para pular a navegação.
- `:focus-visible` com contorno roxo em todos os elementos interativos.
- `prefers-reduced-motion` respeitado (animações de entrada dos `Card`
  desativadas automaticamente).

## Origem

A paleta e os componentes-base foram validados no protótipo estático da
Fase 1 (`preview-html/preview-multipagina-fase1-revisao.html`) antes de
serem implementados em React/Tailwind — mudanças de paleta devem ser
aprovadas antes de alterar `tokens.json`/`tailwind.config.ts`.
