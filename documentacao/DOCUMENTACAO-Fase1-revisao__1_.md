# Documentação Viva — Website King Services

> Este documento é atualizado a cada fase aprovada. Ele é a fonte de
> verdade sobre o que foi decidido, construído e aprovado no projeto.

---

## Roadmap de fases

| Fase | Entregável | Status |
|---|---|---|
| 1 | Fundação: setup Next.js + Design System | 🟢 Aprovada |
| 2 | Home page completa | 🟢 Aprovada |
| 3 | Sobre a Empresa + Parceiro Vivo Empresas | 🟢 Aprovada |
| 4 | Soluções (template + páginas principais) | 🟢 Aprovada |
| 5 | Segmentos (template + páginas principais) | 🟢 Aprovada |
| 6 | Diferenciais, Cases, FAQ, Contato | 🟢 Aprovada |
| 7 | Blog/CMS + Central de Conteúdo | 🟢 Aprovada |
| 8 | Área do Cliente (login/dashboard) | 🟢 Aprovada |
| 9 | King Assistant (assistente virtual) | 🟢 Aprovada |
| 10 | Backend, integrações, SEO técnico, segurança, documentação final | 🟢 Aprovada |

Legenda: ⬜ não iniciada · 🟡 em aprovação · 🟢 aprovada e concluída

---

## Fase 1 — Fundação e Design System

### Decisões de branding (plano vs. brief)

O brief já definia explicitamente paleta (roxo → lilás) e tipografia
(Poppins / Inter), portanto essas escolhas foram seguidas à risca, sem
substituição por padrões genéricos de IA.

**Liberdade criativa assumida (não travada pelo brief):** foi adicionada
uma fonte utilitária monoespaçada (JetBrains Mono) para dados técnicos,
specs e indicadores — reforça o caráter "telecom/tech" da marca sem
recorrer a clichês visuais (circuitos, grades, globos 3D).

**Elemento assinatura:** o ícone de sinal/conectividade do logotipo foi
transformado em um componente reutilizável (`SignalMark`), usado como
indicador de status, loader e divisor de seção — não é decoração, é uma
extensão funcional e coerente da identidade visual.

### Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `king-purple-600` | `#5B2A8C` | Cor primária (referência "King") |
| `king-purple-900` | `#2A1240` | Textos escuros, fundo footer, dark surfaces |
| `king-lilac-500` | `#A873E0` | Cor secundária (referência "Services") |
| `king-graphite` | `#2A2438` | Texto padrão sobre fundo claro |
| `king-mist` | `#F7F6FA` | Fundo neutro claro |
| Gradiente principal | `#5B2A8C → #A873E0` | CTAs primários, destaques |

### Tipografia

| Papel | Fonte | Peso |
|---|---|---|
| Headings | Poppins | 500–700 |
| Subtítulos | Inter | 600 (SemiBold) |
| Textos | Inter | 400 |
| Botões | Inter | 700 (Bold) |
| Dados/specs (adicional) | JetBrains Mono | 400 |

### Componentes entregues nesta fase

- `Button` (variantes: primary, secondary, ghost, outline-light)
- `Badge` (tons: purple, lilac, neutral)
- `Card` + `CardTitle` + `CardDescription`
- `Container` (largura máxima 1280px)
- `SignalMark` (elemento assinatura)
- `Header` (estrutura de navegação, mega menu será refinado na Fase 2)
- `Footer` (colunas de navegação, aviso legal, LGPD)

### Acessibilidade (WCAG 2.2 AA) — aplicado nesta fase

- Foco visível em todos os elementos interativos (`:focus-visible`)
- Suporte a `prefers-reduced-motion`
- Contraste de cores validado entre texto e fundo nos componentes-base
- HTML semântico (`header`, `nav`, `footer`, `main`)

### Pendências técnicas desta fase (a resolver antes do deploy)

- Rodar `npm install` e validar build (`npm run build`) em ambiente com
  acesso à internet
- Otimizar o logotipo para PNG/SVG com fundo transparente (o arquivo
  fornecido é JPEG com fundo branco)
- Adicionar favicon e manifest (previsto para a Fase 10 — SEO técnico)

### Aprovação da Fase 1

- [x] Aprovado pelo cliente em: 06/07/2026

---

## Fase 2 — Home page

### Decisões aprovadas pelo cliente antes da construção

- **Copy:** escrito integralmente pela equipe (não é copy definitivo de marketing, mas pronto para publicação; pode ser refinado a qualquer momento)
- **Logos de clientes/parceiros e depoimentos:** cliente enviará material real em breve. Nesta fase, as seções `TrustBar` e `Testimonials` foram implementadas com **placeholders explícitos** (comentário no código) prontos para receber o conteúdo real sem retrabalho estrutural
- **Motion:** nível discreto — fade + leve translação ao entrar na viewport (`FadeIn`), respeitando `prefers-reduced-motion`

### Seções entregues (nesta ordem na página)

1. **Hero** — headline, subheadline, 2 CTAs, fundo com gradiente escuro da marca e `SignalMark` como elemento gráfico de fundo
2. **TrustBar** — faixa de confiança (placeholder de logos)
3. **Stats** — 4 indicadores em destaque (fonte mono, reforço técnico)
4. **SolutionsHighlight** — 6 cards de soluções com ícone, linkando para `/solucoes`
5. **VivoPartnershipTeaser** — bloco dedicado à parceria Vivo Empresas com lista de benefícios
6. **Segments** — grid de 8 segmentos atendidos, linkando para `/segmentos`
7. **Differentiators** — 4 diferenciais competitivos
8. **Testimonials** — depoimentos (placeholder)
9. **FinalCta** — chamada final de conversão com gradiente de marca

### Componentes novos criados

- `FadeIn` (animação de scroll discreta, client component, Framer Motion)
- `Hero`, `TrustBar`, `Stats`, `SolutionsHighlight`, `VivoPartnershipTeaser`, `Segments`, `Differentiators`, `Testimonials`, `FinalCta` (em `components/sections`)

### Header — atualizações desta fase

- Comportamento de scroll: transparente sobre o hero, sólido com blur ao rolar
- Mega menu funcional para "Soluções" (hover, com `aria-expanded`/`aria-haspopup`)

### SEO desta fase

- Metadados Open Graph adicionados no layout raiz (título, descrição, locale `pt_BR`)

### Validação técnica realizada

- `npm install` e `npx tsc --noEmit`: **sem erros**
- `npm run build`: falha **apenas** na etapa de download das fontes do Google (`fonts.googleapis.com`), porque este ambiente de desenvolvimento não tem esse domínio liberado. Não é um erro de código — vai funcionar normalmente em ambiente com internet (Vercel, local, etc.)
- Dependências ajustadas para versões estáveis sem CVEs conhecidas (Next.js atualizado de 15.0.0 para 15.5.20 após alerta de segurança do npm)

### Aprovação da Fase 2

- [x] Aprovado pelo cliente em: 06/07/2026
- Observação do cliente: aprovação não é definitiva/imutável — o
  cliente pode solicitar alterações em qualquer fase já aprovada a
  qualquer momento (ex.: possível revisão futura do logotipo).

---

## Fase 3 — Sobre a Empresa + Parceiro Vivo Empresas

### Fonte do conteúdo

Conteúdo baseado no arquivo real enviado pelo cliente ("King Services —
Vivo Empresas — Apresentação Institucional.docx"), com adaptações de
tom para o formato site (institucional → conversacional/B2B) e as três
exclusões combinadas (ver Histórico de decisões): sem indicadores
comerciais internos, sem menção a PF, sem o fluxo duplicado de
"Estrutura Comercial".

### Páginas entregues

**`/sobre`** — Sobre a Empresa
1. `PageHero` — eyebrow, título e descrição de abertura
2. `AboutIntro` — "Quem somos" + lista de atuação (10 itens)
3. `MissionVisionValues` — Missão, Visão e os 5 Valores (Ética, Excelência, Inovação, Comprometimento, Resultado)
4. `ProcessSteps` — Metodologia de trabalho em 5 etapas numeradas (Diagnóstico → Análise → Proposta → Implantação → Acompanhamento)
5. `FinalCta` — chamada final (componente reaproveitado da Home)

**`/vivo-empresas`** — Parceiro Autorizado Vivo Empresas
1. `PageHero`
2. `PartnershipBenefits` — 4 benefícios da parceria
3. `ProcessSteps` — mesma metodologia (reaproveitada, sem duplicar copy)
4. `FinalCta`

### Componentes novos criados

- `PageHero` (herói reutilizável para páginas internas — usado em Sobre e Vivo Empresas, será reaproveitado nas próximas fases)
- `AboutIntro`, `MissionVisionValues`, `ProcessSteps`, `PartnershipBenefits`

### SEO desta fase

- Metadados de título e descrição específicos por página (`/sobre` e `/vivo-empresas`), via `export const metadata` de cada rota

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Aprovação da Fase 3

- [x] Aprovado pelo cliente em: 06/07/2026

---

## Fase 4 — Soluções

### Decisões aprovadas pelo cliente antes da construção

- **Abordagem técnica:** rota dinâmica `/solucoes/[slug]`, alimentada por uma fonte única de dados (`src/data/solutions.ts`) — novas soluções podem ser adicionadas sem criar página nova
- **Categorias:** as 6 categorias do documento institucional enviado (Telefonia Móvel, Internet Empresarial, Telefonia Fixa/PABX, Cloud, Segurança Digital, IoT), confirmadas pelo cliente sem alterações

### Estrutura entregue

- `src/data/solutions.ts` — fonte única de dados das 6 soluções (título, descrições, ícone, specs)
- `SolutionPageTemplate` — template único reutilizado por todas as páginas de solução
- `/solucoes` — página-índice com grid das 6 soluções
- `/solucoes/[slug]` — página individual gerada para cada solução (`generateStaticParams` + `generateMetadata` por slug)

### Ajuste técnico em fases já aprovadas (pequeno, não visual)

Para os links não ficarem "mortos", atualizei:
- **Header (Fase 1/2):** mega menu de "Soluções" agora linka para cada `/solucoes/[slug]` real, em vez de um link genérico
- **Home / `SolutionsHighlight` (Fase 2):** os 6 cards de solução agora puxam os dados de `src/data/solutions.ts` (mesma fonte única), e cada card linka para a página real da respectiva solução

Nenhum conteúdo visual ou copy da Home foi alterado — apenas os links passaram a apontar para destinos reais.

### SEO desta fase

- Cada página de solução tem `title`/`description` próprios, gerados a partir dos dados centrais

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Aprovação da Fase 4

- [x] Aprovado pelo cliente em: 06/07/2026
- Observação: durante a revisão, o cliente identificou um texto de
  "path" (`/solucoes/internet-empresarial →`) no preview visual em
  HTML apresentado no chat e pediu a remoção. Esclarecido que esse
  texto existia **apenas no preview ilustrativo** (mockup em HTML),
  não no código real do projeto — `/solucoes/page.tsx` já envolvia o
  card inteiro (ícone + título + descrição) em um único link `<Link>`
  para a página da solução, sem exibir nenhum caminho de URL. Nenhuma
  alteração de código foi necessária; apenas o preview foi corrigido
  para refletir fielmente o comportamento real do site.

---

## Fase 5 — Segmentos

### Decisões aprovadas pelo cliente antes da construção

- **Categorias:** mantidas as 10 categorias do documento institucional
  (Comércio, Indústria, Agronegócio, Saúde, Educação, Construção
  Civil, Logística, Escritórios Profissionais, Instituições
  Financeiras, Setor Público) — **com ressalva do cliente**: essa
  lista pode ser reavaliada e reduzida numa próxima revisão.
- **Desafios de cada setor:** o documento institucional não detalhava
  "desafios" por segmento (exigido pelo brief: "desafios, soluções,
  benefícios, cases"). O cliente autorizou a equipe a redigir esse
  conteúdo com base em conhecimento geral de mercado de cada setor.
  **Cases reais** ficam reservados para a Fase 6 (seção "Cases"
  dedicada), sujeitos a envio de material pelo cliente.

### Estrutura entregue

- `src/data/segments.ts` — fonte única de dados dos 10 segmentos (título, ícone, desafios, soluções recomendadas por slug, benefícios)
- `SegmentPageTemplate` — template único: hero → desafios do setor → benefícios → soluções recomendadas (puxadas de `solutions.ts` da Fase 4, criando conexão real entre as duas fases)
- `/segmentos` — página-índice com grid dos 10 segmentos
- `/segmentos/[slug]` — página individual gerada por segmento

### Ajuste técnico em fase já aprovada (pequeno, não visual)

- **Home / `Segments` (Fase 2):** os cards de segmento agora puxam os
  10 itens de `src/data/segments.ts` (mesma fonte única usada nas
  páginas dedicadas) e cada card linka para a página real do
  segmento. Grid ajustado de 4 para 5 colunas no desktop para
  acomodar os 10 itens. Nenhum outro conteúdo da Home foi alterado.

### SEO desta fase

- Cada página de segmento tem `title`/`description` próprios, gerados a partir dos dados centrais

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Aprovação da Fase 5

- [x] Aprovado pelo cliente em: 06/07/2026

---

## Fase 6 — Diferenciais, Cases, FAQ e Contato

### Decisões aprovadas pelo cliente antes da construção

- **FAQ:** perguntas redigidas pela equipe com base no conteúdo já aprovado nas fases anteriores (parceria, metodologia, segmentos, soluções)
- **Formulário de contato:** construído no front-end nesta fase (validação client-side), com integração real a CRM/backend **reservada para a Fase 10**. O formulário simula o envio e exibe confirmação visual — nenhum dado é transmitido a um servidor ainda
- **Mapa do Google Maps:** não incluído nesta fase, por decisão do cliente

### Páginas entregues

**`/diferenciais`** — 8 diferenciais em grid (expandido a partir dos 4 usados na Home), com conteúdo do documento institucional: Atendimento Consultivo, Portfólio Completo, Suporte Técnico Qualificado, Relacionamento de Longo Prazo, Agilidade na Implantação, Atendimento Nacional, Especialistas Certificados, Pós-venda Ativo

**`/cases`** — grid de cases com **placeholders explícitos** (comentário no código), estrutura pronta (Desafio → Solução → Resultado), aguardando material real do cliente (combinado desde a Fase 5)

**`/faq`** — accordion com busca em tempo real (8 perguntas), filtra por pergunta e resposta

**`/contato`** — dados reais da empresa (telefone, WhatsApp, e-mail, endereço, extraídos do documento institucional) + formulário front-end com validação (nome, e-mail, telefone opcional, mensagem)

### Componentes novos criados

- `DifferentiatorsGrid`, `CasesGrid`, `FaqAccordion`, `ContactInfo`, `ContactForm`

### Ajuste técnico em fases já aprovadas (pequeno, não visual)

Para conectar as novas páginas ao restante do site:
- **Header:** botão "Fale com um especialista" agora linka para `/contato`
- **`FinalCta`** (usado em várias páginas): botão agora linka para `/contato`
- **Footer:** todas as colunas de links atualizadas com URLs reais (antes eram `href="#"`), incluindo Diferenciais, FAQ e Contato; telefone e e-mail reais adicionados ao rodapé

Nenhum conteúdo visual, copy ou estrutura de seção foi alterado nessas fases — apenas destinos de link e um pequeno trecho de contato no rodapé.

### SEO desta fase

- Metadados de título e descrição específicos para as 4 páginas

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Aprovação da Fase 6

- [x] Aprovado pelo cliente em: 06/07/2026

---

## Fase 7 — Blog/CMS + Central de Conteúdo

### Decisões aprovadas pelo cliente antes da construção

- **Artigos do blog:** 4 artigos de exemplo escritos pela equipe, com foco em SEO e autoridade B2B em telecom/tecnologia (copy de exemplo, não definitivo — pode ser substituído por conteúdo real do cliente a qualquer momento)
- **Central de Conteúdo:** usar **placeholders explícitos** (mesmo padrão de Cases), já que ainda não existem materiais reais (e-books, guias, white papers, webinars)

### Estrutura entregue

**Blog**
- `src/data/blog.ts` — fonte única de dados dos 4 artigos (título, categoria, resumo, conteúdo, data, tempo de leitura)
- `/blog` — página-índice com busca em tempo real + filtro por categoria
- `/blog/[slug]` — página de artigo individual (`generateStaticParams` + `generateMetadata`)
- `NewsletterSignup` — captura de e-mail (front-end, validação local; integração real prevista para a Fase 10)

**Central de Conteúdo**
- `/central-de-conteudo` — grid de 4 materiais (E-book, Guia, White Paper, Webinar), todos com **placeholder explícito** no código, botão "Em breve" desabilitado até o material real chegar

### Componentes novos criados

- `BlogGrid`, `BlogPostTemplate`, `NewsletterSignup`, `ContentHubGrid`

### Nota técnica sobre o "CMS"

O brief pede um "CMS completo". Como o backend/painel administrativo é
entregável da **Fase 10**, o que existe nesta fase é a estrutura de
dados (`blog.ts`) que alimenta as páginas — o mesmo padrão já usado em
`solutions.ts` e `segments.ts`. Essa estrutura está pronta para,
futuramente, ser plugada a um CMS real (headless, ex: Sanity/Contentful,
ou o backend NestJS próprio previsto no brief) sem precisar refazer as
páginas.

### SEO desta fase

- Metadados de título e descrição por artigo, gerados a partir dos dados centrais

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Aprovação da Fase 7

- [x] Aprovado pelo cliente em: 06/07/2026

---

## Fase 8 — Área do Cliente (login/dashboard)

### Decisões aprovadas pelo cliente antes da construção

- **Escopo:** construir as 6 seções (Dashboard, Contratos, Chamados, Faturas, Documentos, Suporte) com dados fictícios de demonstração
- **Login:** simulado no front-end — qualquer e-mail/senha preenchidos "autentica" o usuário via `localStorage`, sem validação real de credenciais

### Estrutura entregue

- `src/lib/auth-context.tsx` — contexto de autenticação simulada (React Context + `localStorage`), com `login()`/`logout()`
- `/login` — tela de acesso
- `/area-do-cliente` — layout protegido (`AreaDoClienteLayout`) com sidebar de navegação; redireciona para `/login` se não houver sessão simulada
- `/area-do-cliente/dashboard` — resumo de contratos, chamados e faturas
- `/area-do-cliente/contratos` — tabela de contratos (dados fictícios)
- `/area-do-cliente/chamados` — lista de chamados com status + atalho para abrir novo
- `/area-do-cliente/faturas` — lista de faturas com status de pagamento
- `/area-do-cliente/documentos` — lista de documentos para download (placeholder)
- `/area-do-cliente/suporte` — formulário de abertura de chamado (front-end)
- `src/data/client-area-mock.ts` — dados fictícios centralizados

### Componentes novos criados

- `AuthProvider`, `ClientAreaSidebar`, `StatCard`, `NewTicketForm`

### ⚠️ Importante — o que NÃO é real nesta fase

- **Não há autenticação real.** Qualquer e-mail/senha entra no sistema. Nenhuma credencial é validada.
- **Não há dados reais.** Contratos, faturas, chamados e documentos são fictícios, fixos no código.
- **Downloads de fatura/documento estão desabilitados** (botões visuais, sem arquivo real por trás).
- Autenticação real (JWT/OAuth), dados do banco de dados (Prisma/PostgreSQL) e permissões de usuário estão previstos para a **Fase 10**.

### Ajuste técnico em fases já aprovadas (pequeno, não visual)

- **Header:** botão "Área do Cliente" agora linka para `/login`
- **Footer:** link "Área do Cliente" corrigido de `/contato` para `/login`

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Aprovação da Fase 8

- [x] Aprovado pelo cliente em: 06/07/2026

---

## Fase 9 — King Assistant (assistente virtual)

### Decisões aprovadas pelo cliente antes da construção

- **Motor de respostas:** por regras/palavras-chave nesta fase, **sem IA real ainda**. Integração com OpenAI/Microsoft Copilot/Google Gemini está prevista para a Fase 10, quando existir uma camada de backend para processar as chamadas com segurança (chaves de API nunca ficam expostas no front-end)
- **Presença:** o widget aparece em **todas as páginas do site**, incluindo Área do Cliente

### Estrutura entregue

- `src/lib/king-assistant-engine.ts` — motor de regras: 12 categorias de palavras-chave (soluções, parceria Vivo, segmentos, contato, suporte, preço) com respostas e links para páginas reais do site
- `ChatWidget` — widget flutuante (ícone `SignalMark`), painel de chat, histórico de mensagens, envio por Enter/botão
- `AssistantLeadForm` — captação de lead (nome, e-mail, telefone) exibida automaticamente quando o motor de regras não reconhece a pergunta (fallback)
- Adicionado ao layout raiz (`layout.tsx`) — presente globalmente em todas as rotas

### Comportamento do motor de regras

- Reconhece menções a soluções (internet, cloud, segurança, telefonia, IoT etc.) e responde com link direto para a página real da Fase 4
- Reconhece menções a "Vivo"/parceria, segmentos, suporte e contato, linkando às páginas corretas
- Perguntas sobre preço são respondidas com transparência (não geramos preço genérico) e direcionadas a um especialista
- Perguntas não reconhecidas acionam o formulário de captação de lead automaticamente

### ⚠️ Importante — o que NÃO é real nesta fase

- **Não há IA real.** As respostas vêm de um motor de regras fixo no código, não de um modelo de linguagem.
- **Lead capturado não é enviado a lugar nenhum ainda** — fica só na simulação de front-end.
- Agendamento real de reuniões e encaminhamento automático a consultores via CRM: **Fase 10**.

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Aprovação da Fase 9

- [x] Aprovado pelo cliente em: 06/07/2026
- Observação: o preview em HTML falhou duas vezes (indisponibilidade
  temporária do serviço local de visualização). Aprovação concedida
  com base na descrição textual detalhada do comportamento do widget.

---

## Fase 10 — Backend, integrações, SEO técnico, segurança e documentação final

### Escopo combinado com o cliente antes da construção

Esta fase reúne itens de natureza muito diferente. Foi combinado
construir, em uma única entrega, tudo que é **factível sem
credenciais externas**, deixando **pontos de integração prontos no
código** (variáveis de ambiente + stubs) para tudo que depende de
contas/credenciais que só o cliente possui (HubSpot, RD Station, GA4,
Meta Pixel, WhatsApp Business API, Microsoft 365, Google Workspace,
Cloudflare, banco de dados de produção).

### SEO técnico — entregue e funcional

- `src/app/sitemap.ts` — sitemap dinâmico (gera automaticamente todas as rotas de soluções, segmentos e blog a partir das fontes de dados centrais)
- `src/app/robots.ts` — robots.txt dinâmico, referenciando o sitemap e bloqueando `/login` e `/area-do-cliente` da indexação
- `OrganizationSchema` — dados estruturados Schema.org (LocalBusiness) com endereço, telefone e e-mail reais, injetados no layout raiz
- `BreadcrumbSchema` + componente visual `Breadcrumbs` — aplicado nas páginas de Solução, Segmento e Blog (dados estruturados + navegação visível)
- Metadados expandidos no layout raiz: `metadataBase`, `canonical`, Open Graph completo, Twitter Cards, `robots: index/follow`

### Segurança — entregue e funcional (parte front-end)

- Headers de segurança em `next.config.mjs`: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security (HSTS)
- `CookieConsentBanner` — banner de consentimento LGPD, com opção de aceitar/rejeitar, armazenado localmente
- Nota técnica: CSP (Content-Security-Policy) foi deliberadamente **não** adicionado ainda — recomenda-se implementá-lo em modo `Report-Only` após testes em produção, para não quebrar scripts de terceiros (GTM, Meta Pixel) sem validação prévia

### Backend — esqueleto de código (pasta `/backend`, NestJS + Prisma)

- `prisma/schema.prisma` — modela todas as entidades reais do site: `User`, `Contract`, `Ticket`, `Invoice`, `Lead`
- Módulos: `AuthModule` (login real com JWT, substitui o login simulado da Fase 8), `LeadsModule` (recebe os formulários de Contato/Newsletter/King Assistant), `ContractsModule`, `TicketsModule`, `InvoicesModule`
- `PrismaModule`/`PrismaService` — conexão com PostgreSQL via `DATABASE_URL`

**⚠️ Status honesto deste backend:** é um **esqueleto de código
revisado manualmente**, não um servidor testado em produção. Neste
sandbox não há PostgreSQL persistente nem acesso a
`binaries.prisma.sh` (necessário para `prisma generate`), então:
- A checagem de tipos do backend roda isolada do front-end (corrigido
  o `tsconfig.json` do front-end, que sem querer tentava compilar os
  arquivos do backend também)
- **1 erro esperado** permanece: o tipo `LeadSource` (gerado pelo
  Prisma) não existe ainda porque o Prisma Client não pôde ser gerado
  neste ambiente — resolve sozinho ao rodar `npx prisma generate` num
  ambiente com internet liberada
- Todo o restante do backend (controllers, services, DTOs, guards)
  compilou sem erros

### Integrações — pontos prontos, aguardando credenciais reais

- `.env.example` — todas as variáveis previstas no brief (GA4, GTM, Meta Pixel, Clarity, Google Maps, WhatsApp Business API, HubSpot, RD Station, JWT, OAuth Google/Microsoft, Vercel, Cloudflare)
- `AnalyticsScripts` — componente que só carrega GA4/GTM/Meta Pixel se as variáveis de ambiente correspondentes existirem (nenhum script é carregado sem configuração, por padrão)
- `LeadsService.create()` — comentário `TODO` marcando onde entra a integração real com HubSpot/RD Station

### Documentação final

- `README.md` (raiz) — como rodar o front-end
- `backend/README.md` — como rodar o backend, endpoints disponíveis, status honesto do que falta
- `.env.example` — guia de todas as variáveis de ambiente
- `docs/DOCUMENTACAO.md` (este arquivo) — histórico completo de decisões de todas as 10 fases

### Validação técnica realizada

- Front-end: `npx tsc --noEmit` — sem erros
- Backend: `npx tsc --noEmit` — 1 erro esperado (tipo gerado pelo Prisma, resolve com `prisma generate` em ambiente com internet)

### Aprovação da Fase 10

- [x] Aprovado pelo cliente em: 06/07/2026
- Observação do cliente: aprovação não é definitiva/imutável — mesmo
  com o roadmap original das 10 fases concluído, o cliente pode
  solicitar alterações em qualquer fase já aprovada a qualquer
  momento, sem que isso invalide o restante do projeto.

---

## Status do projeto — roadmap original concluído

Todas as 10 fases do Prompt Master original foram construídas e
aprovadas pelo cliente. O projeto está em estado de **MVP completo**
navegável de ponta a ponta, com as ressalvas de status honestas
registradas em cada fase (principalmente Fases 8, 9 e 10, que dependem
de backend real, credenciais de integração e dados de produção para
sair do estado de demonstração).

Próximos passos possíveis, a critério do cliente, não fazem mais
parte do roadmap original e exigiriam um novo planejamento de fase:
- Conectar o backend a um banco de dados real e fazer deploy
- Fornecer credenciais reais das integrações (GA4, HubSpot, WhatsApp
  Business API etc.)
- Enviar os materiais reais ainda pendentes (logos de clientes,
  depoimentos, cases, e-books/guias/webinars da Central de Conteúdo)
- Revisar itens sinalizados com ressalva (ex.: lista de 10 segmentos,
  logotipo)

---

## Fase 1 — Revisão (reaberta a pedido do cliente)

> Conforme regra combinada desde o início do projeto, qualquer fase
> aprovada pode ser reaberta a qualquer momento sem invalidar o
> restante do projeto já construído. Esta seção registra a primeira
> reabertura, do Header/Design System (Fase 1).

### Solicitação do cliente

1. Aumentar o tamanho do logotipo no Header
2. Fazer com que **todos** os itens do menu principal (não só
   "Soluções") exibissem, ao passar o mouse, um mega menu com o
   conteúdo organizado em colunas

### Decisões confirmadas antes da execução

- **Itens com mega menu:** todos — Soluções, Segmentos, Parceiro Vivo
  Empresas, Cases, Blog, Sobre
- **Segmentos:** os 10 segmentos organizados em colunas (2 colunas de
  5 itens cada)
- **Logotipo:** aumentado, com o Header também mais alto para
  acomodar (evitar logo espremido)

### O que foi alterado

- **`Header.tsx`** — reescrito por completo:
  - Logo: de `h-9` (36px) para `h-12`/`h-14` (48-56px no desktop); altura do header de `h-20` (80px) para `h-24` (96px)
  - Todos os 6 itens de navegação agora têm mega menu em colunas ao passar o mouse, alimentado pelas fontes de dados centrais (`solutions.ts`, `segments.ts`, `blog.ts`) — sem duplicar conteúdo, sem links "mortos"
  - **Soluções:** 2 colunas de 3 soluções cada
  - **Segmentos:** 2 colunas de 5 segmentos cada
  - **Parceiro Vivo Empresas:** coluna "Sobre a parceria" (benefícios) + coluna "Como trabalhamos" (metodologia), linkando para âncoras dentro da página `/vivo-empresas`
  - **Cases:** coluna "Por segmento" (categorias de case) + link "Ver todos os cases"
  - **Blog:** coluna "Categorias" (as 4 categorias reais dos artigos) + coluna "Recursos" (Central de Conteúdo, ver todos os artigos)
  - **Sobre:** coluna "A empresa" (Quem somos, Missão/Visão/Valores, Metodologia — via âncoras) + coluna "Saiba mais" (Diferenciais, Vivo Empresas, Cases)

- **Âncoras adicionadas** (`id` + `scroll-mt-24`) para os links do mega menu funcionarem com scroll suave:
  - `/sobre#quem-somos`, `/sobre#missao-visao-valores`, `/sobre#metodologia`
  - `/vivo-empresas#beneficios`, `/vivo-empresas#metodologia`

### Validação técnica realizada

- `npx tsc --noEmit`: sem erros

### Correção após preview visual (mesma revisão)

O cliente identificou, no preview interativo em HTML, que o mega menu
de "Soluções" ficava cortado/fora da tela — porque o painel estava
centralizado sob o item, e "Soluções" é o primeiro item, próximo à
borda esquerda do header. Corrigido em `Header.tsx` e no preview:

- Painel agora alinha pela **esquerda** do item por padrão, e pela
  **direita** apenas no último item ("Sobre") — evita vazamento da
  tela nas duas pontas
- Animação de abertura trocada de exibição instantânea para uma
  **transição suave** (fade + leve deslocamento vertical) usando
  Framer Motion (`AnimatePresence`), a mesma biblioteca já usada no
  `FadeIn` da Home
- Confirmado: os links do mega menu já usavam `next/link` com a rota
  real de cada página (comportamento de clique não precisou de
  correção, já funcionava; o preview em HTML estático usa uma
  simulação em JS só para fins de demonstração, já que não há páginas
  reais dentro de um arquivo `.html` isolado)

### Segundo ajuste (mesma revisão): hover mais lento + logotipo confirmado

- **Logotipo → Home:** confirmado que já estava correto no código real
  (`<Link href="/">` envolvendo o logo desde a Fase 1 original).
  Corrigido também no preview em HTML estático, que usava `href="#"`
  sem indicação de destino
- **Transição do mega menu:** duração aumentada de 0.22s para 0.4s,
  para uma abertura mais lenta e perceptível
- **Margem antes de fechar:** adicionado um delay de 300ms no fechamento
  do mega menu ao tirar o mouse — antes fechava imediatamente, o que
  podia impedir o clique em um link se o mouse levasse mais que
  instantâneo para percorrer o espaço até o painel. Implementado com
  `setTimeout`/`clearTimeout` tanto no `Header.tsx` real quanto no
  preview em HTML

### Terceiro ajuste (mesma revisão): auditoria de links de todos os menus

O cliente pediu para replicar a correção do "Soluções" nos demais
menus. Como a correção de alinhamento/transição já era genérica
(mesma função para todos os itens do `NAV_ITEMS`), Segmentos, Vivo
Empresas, Cases, Blog e Sobre já herdavam automaticamente o
alinhamento e a transição suave. O trabalho real desta etapa foi
**auditar se cada link individual leva ao destino correto**:

| Menu | Resultado da auditoria |
|---|---|
| Soluções | ✅ OK — já corrigido anteriormente |
| Segmentos | ✅ OK — 10 slugs conferem com `segments.ts` |
| Parceiro Vivo Empresas | ✅ OK — âncoras `#beneficios` e `#metodologia` existem na página |
| Cases | ✅ OK — sem sub-seções por categoria ainda, links apontam para `/cases` (não há link morto, apenas não há filtro específico, pois a página de Cases não tem esse recurso) |
| Sobre | ✅ OK — âncoras `#quem-somos`, `#missao-visao-valores`, `#metodologia` existem na página |
| **Blog** | ⚠️ **Encontrado e corrigido**: os links de categoria levavam para `/blog` sem aplicar o filtro de fato |

**Correção aplicada ao Blog:**
- Links do mega menu agora usam `?categoria=<nome>` na URL (ex: `/blog?categoria=Cloud`)
- `BlogGrid.tsx` passou a ler esse parâmetro via `useSearchParams` e pré-seleciona o filtro de categoria automaticamente ao carregar a página
- `/blog/page.tsx` envolvido em `<Suspense>` (exigência do Next.js para uso de `useSearchParams` em componente client)

### Preview completo com âncoras reais (sem mudança de código)

O cliente pediu para ver, num único HTML, o mesmo resultado do Blog
(conteúdo real aparecendo, não só um aviso) replicado em todos os
menus, e estabeleceu uma **regra permanente**: a partir de agora,
toda entrega deve incluir os três arquivos juntos — o zip do
projeto, a documentação em `.md`, e um HTML de preview funcionando
como no servidor web.

Foi criado `preview-completo-fase1-revisao.html`: uma página única
que reproduz, em âncoras reais dentro do mesmo arquivo, o conteúdo de
Soluções (6), Segmentos (10), Vivo Empresas (benefícios + metodologia),
Cases (3) e Sobre (quem somos + valores + metodologia) — clicar em
qualquer item do mega menu rola até o conteúdo real correspondente e
aplica um destaque visual breve. O Blog mantém o filtro funcional já
implementado. Links que levam a páginas fora deste preview (Contato,
Login, Diferenciais, Central de Conteúdo) mostram um aviso com a rota
real de destino, já que não fazem parte da auditoria de menus desta
etapa.

**Nenhuma alteração de código foi feita nesta etapa** — o preview
apenas demonstra, de forma mais fiel, o que o código real (auditado
na etapa anterior) já faz corretamente.

### Preview multi-página (correção de formato)

O cliente esclareceu que não queria tudo numa página única com
scroll — queria que cada link abrisse uma **página nova**, com o
conteúdo anterior saindo de tela por completo (mais parecido com a
navegação real por rotas do Next.js). Criado
`preview-multipagina-fase1-revisao.html`: uma simulação client-side
de roteamento (SPA), onde:
- Cada clique no mega menu troca completamente o conteúdo visível — a
  página anterior desaparece, a nova aparece com uma transição de
  entrada
- O mega menu fecha imediatamente ao clicar
- Soluções e Segmentos têm página-índice + página de detalhe dinâmica
  (populada por dados em JS, no mesmo espírito do `solutions.ts`/
  `segments.ts` reais)
- Vivo Empresas e Sobre continuam como página única com âncoras
  internas (fiel ao comportamento real, já que no site de verdade
  também são páginas únicas com seções ancoradas, não páginas
  separadas)
- Blog mantém o filtro por categoria funcional
- Diferenciais, Central de Conteúdo, Contato (com formulário) e Login
  também viraram páginas completas dentro do preview, substituindo os
  avisos de "toast" usados antes

**Nenhuma alteração de código foi feita no projeto Next.js** — o site
real já implementa esse comportamento nativamente (cada rota é uma
página de verdade); este preview só precisava passar a simulá-lo
corretamente.

### Correção do logotipo no preview

O cliente identificou que o preview em HTML usava um ícone desenhado
à mão (aproximação) em vez da logomarca oficial. Confirmado que o
código real (`Header.tsx`) **já usava a imagem correta** desde a
Fase 1 original (`/images/logo-king-services.jpg`) — o problema
existia só no arquivo de preview estático. Corrigido: a logomarca
real (`LOGO_KING_SERVICES.jpeg`, enviada no início do projeto) foi
embutida em base64 diretamente no HTML do preview, para que o
arquivo único continue funcionando de forma independente.

### Aprovação desta revisão

- [ ] Aprovado pelo cliente em: ____/____/______

---

### Home expandida no preview (a pedido do cliente)

O cliente pediu para ver o estado atual completo do site, com foco na
Home. A Home no preview multi-página estava resumida a um placeholder
(o foco até então era testar a navegação do menu). Expandida para
reproduzir fielmente as 9 seções reais da Fase 2: Hero, TrustBar,
Stats, Soluções em destaque, Parceria Vivo Empresas, Segmentos,
Diferenciais, Depoimentos e CTA final — com os cards de Soluções e
Segmentos clicáveis, levando às páginas de detalhe correspondentes
(mesma fonte de dados usada no restante do preview).

**Nenhuma alteração de código foi feita no projeto Next.js** — a Home
real já tinha essas 9 seções completas desde a Fase 2; era só o
preview de demonstração que estava resumido.

---

- **06/07/2026** — Estrutura inicial do projeto e Design System criados
  com base no Prompt Master fornecido.
- **06/07/2026** — Fase 1 (Fundação + Design System) aprovada pelo
  cliente sem alterações. Início do planejamento da Fase 2 (Home).
- **06/07/2026** — Fase 2 (Home) construída: copy escrito pela equipe,
  logos/depoimentos como placeholder (aguardando material real do
  cliente), motion discreto. Aguardando aprovação do cliente.
- **06/07/2026** — Fase 2 (Home) aprovada pelo cliente. Regra combinada:
  qualquer fase já aprovada pode ser reaberta a pedido do cliente a
  qualquer momento (ex.: revisão do logotipo), sem que isso invalide o
  restante do projeto já construído.
- **06/07/2026** — Fase 3 aguardando envio, pelo cliente, do arquivo com
  conteúdo real (história, missão/visão/valores, equipe, parceria Vivo
  Empresas). Combinado: todo conteúdo recebido será analisado antes de
  ser publicado; o que não for adequado para o site permanece fora do
  ar, com o motivo registrado em comentário nesta documentação.
- **06/07/2026** — Cliente enviou o arquivo "King Services — Vivo
  Empresas — Apresentação Institucional.docx", contendo conteúdo real
  para as Fases 3, 4, 5 e 6. Análise realizada e decisões confirmadas
  pelo cliente:
  - **Indicadores comerciais internos** (Taxa de Conversão, Tempo Médio
    de Implantação, Retenção de Clientes, MRR etc.) — **NÃO serão
    publicados** no site. São métricas internas de gestão comercial,
    sem valor para o cliente final. Mantidos apenas neste documento
    como registro, caso sejam úteis para relatórios internos futuros.
  - **Menção a atendimento Pessoa Física (PF)** — **NÃO será publicada**.
    O documento institucional cita atendimento a PF, PME e Grandes
    Corporações, mas o site manterá foco 100% B2B/corporativo,
    conforme posicionamento premium definido no brief original.
  - **Duplicação de processo** (Metodologia de Trabalho vs. Estrutura
    Comercial) — o documento trazia dois fluxos quase idênticos.
    Decisão: usar apenas a **Metodologia de Trabalho**
    (Diagnóstico → Análise → Proposta → Implantação → Acompanhamento)
    por ser mais clara para o cliente final. A "Estrutura Comercial"
    (Prospecção → Qualificação → Consultoria → Negociação →
    Implantação → Pós-venda) não será publicada, por ser voltada ao
    processo interno de vendas, não à experiência do cliente no site.
- **06/07/2026** — Fase 3 construída: páginas `/sobre` e
  `/vivo-empresas`, com o conteúdo aprovado (sem PF, sem indicadores
  internos, com metodologia única). Aguardando aprovação do cliente.
- **06/07/2026** — Fase 3 aprovada pelo cliente. Início do
  planejamento da Fase 4 (Soluções).
- **06/07/2026** — Fase 4 construída: rota dinâmica
  `/solucoes/[slug]` com as 6 categorias do documento institucional,
  fonte única de dados (`solutions.ts`) e template reutilizável.
  Header e cards de solução da Home atualizados para linkar às
  páginas reais. Aguardando aprovação do cliente.
- **06/07/2026** — Fase 4 aprovada pelo cliente, após esclarecimento
  sobre texto de path visível apenas no preview ilustrativo (não no
  código real). Início do planejamento da Fase 5 (Segmentos).
- **06/07/2026** — Fase 5 construída: rota dinâmica
  `/segmentos/[slug]` com as 10 categorias do documento institucional
  (mantidas com ressalva de possível revisão futura pelo cliente).
  Desafios de cada setor redigidos pela equipe com base em
  conhecimento geral de mercado (autorizado pelo cliente). Cada
  página recomenda soluções reais da Fase 4. Home atualizada para
  linkar aos segmentos reais. Aguardando aprovação do cliente.
- **06/07/2026** — Fase 5 aprovada pelo cliente, após visualização de
  preview em HTML da página-índice e de uma página de detalhe
  (Saúde). Início do planejamento da Fase 6 (Diferenciais, Cases,
  FAQ, Contato).
- **06/07/2026** — Fase 6 construída: páginas `/diferenciais`,
  `/cases` (com placeholders), `/faq` (accordion com busca) e
  `/contato` (dados reais + formulário front-end, sem mapa, sem
  backend ainda). Header, Footer e `FinalCta` atualizados para linkar
  a essas páginas. Aguardando aprovação do cliente.
- **06/07/2026** — Fase 6 aprovada pelo cliente, após visualização de
  previews em HTML das 4 páginas (Diferenciais, Cases, FAQ, Contato).
  Início do planejamento da Fase 7 (Blog/CMS + Central de Conteúdo).
- **06/07/2026** — Fase 7 construída: `/blog` (índice com busca e
  filtro por categoria) e `/blog/[slug]` com 4 artigos de exemplo
  escritos pela equipe; `/central-de-conteudo` com 4 materiais em
  placeholder explícito; newsletter front-end. Aguardando aprovação
  do cliente.
- **06/07/2026** — Fase 7 aprovada pelo cliente, após visualização de
  previews em HTML do Blog e da Central de Conteúdo. Início do
  planejamento da Fase 8 (Área do Cliente).
- **06/07/2026** — Fase 8 construída: `/login` com autenticação
  simulada (localStorage, sem validação real de credenciais), e as 6
  seções da Área do Cliente (Dashboard, Contratos, Chamados, Faturas,
  Documentos, Suporte) com dados fictícios de demonstração.
  Autenticação real e dados reais ficam para a Fase 10. Aguardando
  aprovação do cliente.
- **06/07/2026** — Fase 8 aprovada pelo cliente, após visualização de
  previews em HTML da tela de Login e do Dashboard. Início do
  planejamento da Fase 9 (King Assistant).
- **06/07/2026** — Fase 9 construída: King Assistant com motor de
  respostas por regras/palavras-chave (sem IA real), widget de chat
  presente em todas as páginas, captação de lead automática em
  perguntas não reconhecidas. IA real e CRM ficam para a Fase 10.
  Aguardando aprovação do cliente.
- **06/07/2026** — Fase 9 aprovada pelo cliente com base em descrição
  textual, após falha temporária da ferramenta de preview em HTML.
  Início do planejamento da Fase 10 (Backend, integrações, SEO
  técnico, segurança, documentação final).
- **06/07/2026** — Fase 10 construída: SEO técnico (sitemap, robots,
  Schema.org, breadcrumbs, metadados completos) e segurança front-end
  (headers, banner de cookies LGPD) funcionais; esqueleto de backend
  NestJS + Prisma (Auth, Leads, Contracts, Tickets, Invoices) revisado
  manualmente, com 1 erro esperado por falta de acesso a
  binaries.prisma.sh neste sandbox; `.env.example` e stubs de
  analytics prontos para credenciais reais; documentação final
  consolidada. Aguardando aprovação do cliente.
- **06/07/2026** — Fase 10 aprovada pelo cliente. Regra combinada
  reafirmada: qualquer fase pode ser reaberta a qualquer momento, sem
  invalidar o restante do projeto. Roadmap original das 10 fases do
  Prompt Master concluído.
- **06/07/2026** — Cliente solicitou reabertura da Fase 1 (Header):
  logotipo maior e mega menus em colunas para todos os itens do menu
  (antes só "Soluções" tinha). Construído com fontes de dados centrais
  já existentes, sem duplicar conteúdo. Aguardando aprovação do
  cliente para esta revisão específica.
- **08/07/2026** — Cliente testou o preview interativo e identificou
  que o mega menu de "Soluções" ficava cortado (vazando a tela).
  Corrigido: alinhamento esquerda/direita conforme a posição do item,
  e transição de abertura suavizada com Framer Motion. Aguardando
  nova aprovação.
- **08/07/2026** — Cliente pediu: logotipo linkado à Home (já estava
  correto no código real) e transição do mega menu mais lenta, com
  margem de tempo antes de fechar para permitir o clique. Ajustado
  em `Header.tsx` (delay de 300ms + duração de 0.4s) e no preview em
  HTML. Aguardando nova aprovação.
- **08/07/2026** — Cliente pediu para replicar a correção do
  "Soluções" nos demais menus. Auditoria completa de todos os links
  realizada: 5 dos 6 menus já estavam corretos (a correção de
  alinhamento/transição era genérica). Encontrado e corrigido 1
  problema real: links de categoria do Blog não filtravam de fato —
  agora usam `?categoria=` na URL e `BlogGrid` pré-seleciona o filtro
  via `useSearchParams`. Aguardando nova aprovação.
- **08/07/2026** — Cliente pediu um preview único mostrando conteúdo
  real (não só aviso) para todos os menus, como já era feito no Blog.
  Criado `preview-completo-fase1-revisao.html` com âncoras reais para
  Soluções, Segmentos, Vivo Empresas, Cases e Sobre, mais o filtro
  funcional do Blog. Sem alteração de código nesta etapa. **Regra
  permanente estabelecida pelo cliente:** toda entrega a partir de
  agora deve incluir três arquivos juntos — zip do projeto,
  documentação em `.md`, e HTML de preview funcionando como no
  servidor web.
- **08/07/2026** — Cliente esclareceu que o preview em página única
  não era o formato desejado — queria páginas separadas de verdade
  (conteúdo anterior sai de tela ao clicar). Criado
  `preview-multipagina-fase1-revisao.html` com sistema de "rotas"
  client-side (SPA), cobrindo todas as páginas do menu. Sem alteração
  de código no projeto Next.js. Aguardando aprovação.
- **08/07/2026** — Cliente identificou que o logo no preview HTML era
  um ícone desenhado à mão, não a logomarca real. Confirmado que o
  código real já usava a imagem correta; corrigido apenas o preview,
  embutindo a logomarca oficial em base64. Aguardando aprovação.
- **08/07/2026** — Cliente pediu para ver o estado atual completo do
  site, com foco na Home. Home do preview multi-página (que estava
  resumida) expandida para as 9 seções reais da Fase 2. Sem alteração
  de código no projeto Next.js.
