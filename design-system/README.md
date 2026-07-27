# Design System — King Services Digital Platform

**Release 2.1** — camada de tokens, temas e utilitários que formaliza em
TypeScript a identidade visual já aprovada na Fase 1
(`design-system/tokens.json` / `tailwind.config.ts`) e a estende com uma
escala Enterprise completa (`50`–`900`) para cor, além de tipografia,
espaçamento, raios, sombras, breakpoints, z-index, opacidade e animações.

> Esta pasta **não substitui** `design-system/tokens.json` nem
> `tailwind.config.ts` — ambos continuam sendo a fonte de verdade das
> classes utilitárias do Tailwind. O que está aqui é a contraparte
> **tipada em TS**, pensada para uso em lógica de componente (variantes,
> temas, cálculos), não em `content`/`theme.extend` do Tailwind.

## Arquitetura

```
design-system/
├── tokens/       # Valores primitivos (cor, tipografia, espaçamento...)
├── themes/       # Papéis semânticos (light/dark) que consomem os tokens
├── icons/        # Reservado para ícones compartilhados (vazio nesta release)
├── utils/        # cn() e mergeClasses() — composição de className
├── types/        # Tipos transversais, reaproveitados entre domínios
├── tokens.json   # (legado, Fase 1) — não alterado por esta release
└── index.ts      # Barrel raiz
```

Princípios seguidos:

- **Single Responsibility** — cada arquivo de `tokens/` cobre um único
  domínio (cor, tipografia, espaçamento...). `themes/` não define valores
  novos, apenas remapeia tokens para papéis semânticos.
- **Open/Closed** — para adicionar uma cor, peso de fonte ou duração nova,
  edite o arquivo do domínio; nenhum outro arquivo precisa mudar.
- **Interface Segregation** — cada domínio exporta seu próprio tipo
  (`ColorScale`, `FontSizeKey`, `SpacingToken`...) em vez de um único tipo
  monolítico.
- **Dependency Inversion** — componentes devem depender de `themes`
  (papéis semânticos como `theme.text.primary`), não diretamente de
  `tokens/colors` (`neutral[900]`), para suportar dark mode sem refatoração.
- **Atomic Design** — tokens são os "átomos" (menor unidade de decisão
  visual); `themes` compõe esses átomos em decisões de mais alto nível,
  prontas para "moléculas"/"organismos" (os componentes em `components/ui`).

## Como importar

Import do barrel raiz (recomendado para a maioria dos casos):

```ts
import { colors, spacing, cn, lightTheme } from "@/design-system";
```

Import direto do domínio (reduz superfície de import em arquivos que usam
só um token):

```ts
import { primary } from "@/design-system/tokens/colors";
import { cn } from "@/design-system/utils/cn";
```

> O alias `@/*` já existe em `tsconfig.json`, então `@/design-system/...`
> funciona sem configuração adicional.

## Tokens disponíveis

| Domínio       | Arquivo                  | Exemplo                                  |
| ------------- | ------------------------ | ----------------------------------------- |
| Cor           | `tokens/colors.ts`       | `colors.primary[600]`, `colors.danger[500]` |
| Tipografia    | `tokens/typography.ts`   | `typography.fontSize.lg`, `fontWeight.bold` |
| Espaçamento   | `tokens/spacing.ts`      | `spacing[4]` → `1rem`                     |
| Border radius | `tokens/radius.ts`       | `radius.card` → `16px`                    |
| Sombra        | `tokens/shadows.ts`      | `shadows.card`                            |
| Breakpoints   | `tokens/breakpoints.ts`  | `breakpoints.lg` → `1024px`               |
| Z-index       | `tokens/zIndex.ts`       | `zIndex.modal` → `1400`                   |
| Opacidade     | `tokens/opacity.ts`      | `opacity[50]` → `"0.5"`                   |
| Animação      | `tokens/animations.ts`   | `duration.normal`, `easing.easeInOut`     |

### Escalas de cor (nomenclatura Enterprise)

Cada escala vai de `50` (mais clara) a `900` (mais escura):

- `primary` — roxo de marca (âncoras: `600` = `#5B2A8C`, `700` = `#4A2172`,
  `900` = `#2A1240`, os mesmos hex de `tailwind.config.ts`)
- `secondary` — lilás de acento (âncoras: `300` = `#C9A0F0`, `500` = `#A873E0`)
- `neutral` — escala de cinza (âncoras: `graphite`, `mist`, `fog` legados)
- `success`, `warning`, `danger`, `info` — cores semânticas de estado
- `surface`, `background` — aliases para fundo/superfície no modo claro

```ts
import { colors } from "@/design-system";

colors.primary[600]; // "#5B2A8C"
colors.success[500]; // "#2EAD5C"
colors.surface.raised; // "#FFFFFF"
```

## Temas (`themes/`)

`lightTheme` e `darkTheme` traduzem os tokens em papéis semânticos
(`background.page`, `text.primary`, `brand.primary`...). A aplicação hoje
usa apenas o tema claro — `darkTheme` existe para que o dark mode possa
ser ativado depois **sem** precisar tocar nos componentes, desde que eles
já consumam `theme.*` em vez do token bruto.

```ts
import { themes, type ThemeMode } from "@/design-system";

function getTheme(mode: ThemeMode) {
  return themes[mode]; // themes.light | themes.dark
}
```

## Utilitários (`utils/`)

`cn()` combina classes condicionalmente (como `clsx`) e resolve conflitos
entre classes Tailwind do mesmo grupo, mantendo a última (como
`tailwind-merge`) — sem adicionar nenhuma das duas dependências ao projeto.

```tsx
import { cn } from "@/design-system";

function Badge({ active, className }: { active?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-pill px-3 py-1 text-sm",
        active ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-600",
        className,
      )}
    />
  );
}

cn("p-2 bg-primary-500", "p-4"); // => "bg-primary-500 p-4" (p-4 vence)
```

## Boas práticas

1. **Nunca hardcode valores** (`"#5B2A8C"`, `"16px"`) em componentes —
   importe o token (`colors.primary[600]`, `radius.card`).
2. **Prefira `themes` a `tokens/colors` dentro de componentes de UI** —
   isso é o que viabiliza dark mode sem reescrever componentes depois.
3. **Use `cn()`** ao montar `className` condicional em vez de template
   strings manuais, para evitar classes conflitantes silenciosas.
4. **Não edite `tokens.json` nem `tailwind.config.ts` a partir desta
   pasta** — se uma cor de marca mudar, atualize as duas fontes de
   verdade (Tailwind e `design-system/tokens/colors.ts`) na mesma PR.
5. **Um arquivo por domínio** — ao adicionar um novo tipo de token,
   crie um novo arquivo em `tokens/` em vez de expandir um existente
   com um domínio diferente.

## Exemplo completo

```tsx
import { cn, colors, radius, shadows } from "@/design-system";

export function Alert({ intent = "info" }: { intent?: "info" | "success" | "danger" }) {
  const intentColor = { info: colors.info, success: colors.success, danger: colors.danger }[intent];

  return (
    <div
      className={cn("p-4 border")}
      style={{
        backgroundColor: intentColor[50],
        borderColor: intentColor[300],
        borderRadius: radius.lg,
        boxShadow: shadows.sm,
      }}
    >
      {/* conteúdo */}
    </div>
  );
}
```

## Compatibilidade

- Next.js App Router, TypeScript, Tailwind CSS (baseline atual do projeto).
- Nenhuma dependência nova foi instalada; `package.json` não foi alterado.
- Todos os arquivos são novos — nenhum arquivo existente do projeto foi
  modificado por esta release.
