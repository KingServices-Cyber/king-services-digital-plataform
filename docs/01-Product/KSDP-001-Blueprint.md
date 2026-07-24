# Blueprint — King Services Digital Platform (KSDP)

## Visão

A King Services Digital Platform é o site institucional e o motor de geração
de leads da King Services, parceira autorizada Vivo Empresas. Reúne o site
corporativo, o Centro de Conhecimento (blog técnico) e um painel interno para
a equipe comercial gerenciar os contatos recebidos.

## Módulos

| Módulo                 | Rotas                                                      | Descrição                                                                               |
| ---------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Website Corporativo    | `/`, `/sobre`, `/diferenciais`, `/vivo-empresas`, `/cases` | Institucional e apresentação da parceria Vivo Empresas                                  |
| Soluções               | `/solucoes`, `/solucoes/[slug]`                            | Portfólio de produtos (telefonia, internet, PABX, cloud, segurança, IoT)                |
| Segmentos              | `/segmentos`, `/segmentos/[slug]`                          | Página por setor atendido (comércio, indústria, saúde, etc.), com soluções recomendadas |
| Centro de Conhecimento | `/blog`, `/blog/[slug]`, `/central-de-conteudo`            | Artigos técnicos em MDX (ver `content/blog/`)                                           |
| Captação de leads      | `/contato`                                                 | Formulário que grava o contato em `public.leads` (Supabase)                             |
| Área do Cliente        | `/login`                                                   | Autenticação (entrar, cadastrar, recuperar senha) via Supabase Auth                     |
| Painel interno         | `/admin`                                                   | Área autenticada para a equipe gerenciar os leads capturados                            |

## Público-alvo

- **Visitante/lead**: decisor de TI ou administrativo em PMEs buscando
  conectividade e tecnologia corporativa.
- **Equipe comercial King Services**: usa o `/admin` para acompanhar e
  qualificar os leads recebidos pelo site.

## Ciclo de captação de leads

```
Visitante preenche /contato
  → grava em public.leads (RLS: INSERT restrito e validado)
  → trigger dispara Edge Function (notify-new-lead)
  → e-mail para a equipe via Resend
  → equipe acompanha e atualiza o status em /admin
```

Detalhes técnicos do backend em [`supabase/README.md`](../../supabase/README.md).

## Fora de escopo (por ora)

- E-commerce / carrinho de compras — não se aplica ao modelo de negócio
  (venda consultiva).
- App mobile nativo — o site é responsivo e cobre a necessidade atual.
- Múltiplos idiomas — conteúdo em português (mercado brasileiro).
