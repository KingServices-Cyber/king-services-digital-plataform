# Supabase — King Services Digital Platform

Backend de dados e autenticação da plataforma.

- **Projeto:** `king-services-digital-platform` (ref `nupbetbitchsnwtccuew`, região `sa-east-1`)
- **URL:** `https://nupbetbitchsnwtccuew.supabase.co`

## Migrações

As migrações em `supabase/migrations/` refletem o schema aplicado ao projeto,
em ordem cronológica:

| Migração                                | Descrição                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| `20260724090800_create_leads_table.sql` | Cria a tabela `leads` (formulário de contato) com RLS                             |
| `20260724091000_harden_leads_rls.sql`   | Endurece a política de INSERT anônimo e remove a de INSERT autenticado redundante |

## Tabela `leads`

Armazena os contatos enviados pelo formulário público (`/contato`).

### Políticas de Row Level Security (RLS)

| Papel                            | Ação   | Regra                                                                                                                               |
| -------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `anon` (visitante)               | INSERT | Permitido apenas com `status='new'`, `source='site-contato'` e limites de tamanho por campo. **Não** pode ler, atualizar ou apagar. |
| `authenticated` (equipe interna) | SELECT | Pode ler todos os leads.                                                                                                            |
| `authenticated` (equipe interna) | UPDATE | Pode atualizar o status de qualquer lead.                                                                                           |

> Observação de segurança: a política de UPDATE para `authenticated` usa
> `USING (true)` de forma intencional — toda a equipe interna pode gerenciar os
> leads. Quando houver um modelo de papéis (ex.: `admin` vs. `vendas`), essa
> política deve ser refinada. O advisor do Supabase sinaliza isso como um
> aviso informativo esperado.

## Variáveis de ambiente

O front-end lê estas variáveis (veja `.env.example` na raiz):

```
NEXT_PUBLIC_SUPABASE_URL=https://nupbetbitchsnwtccuew.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<chave publishable / anon>
```

A chave publishable é segura para exposição pública — a proteção dos dados é
garantida pelas políticas de RLS acima.

## Autenticação

A página `/login` usa o Supabase Auth (e-mail + senha):

- **Entrar:** `signInWithPassword`
- **Cadastrar:** `signUp` (envia e-mail de confirmação)
- **Recuperar senha:** `resetPasswordForEmail`

Para produção, configure em **Authentication → URL Configuration** do painel
Supabase o _Site URL_ e as _Redirect URLs_ do domínio real, e ajuste os
templates de e-mail.

## Painel interno de leads (`/admin`)

A rota `/admin` é o painel da equipe interna para visualizar e gerenciar os
leads capturados. Ela:

- Exige sessão autenticada (sem login, redireciona para `/login`).
- Lista os leads (ordenados do mais recente), permite filtrar por status e
  alterar o status de cada lead (Novo → Contatado → Qualificado → Ganho/Perdido).
- É `noindex` e está bloqueada no `robots.txt`.

A proteção real dos dados é feita pelo RLS: o papel anônimo não consegue ler os
leads, apenas usuários autenticados.

### Criar o primeiro usuário interno

Como o autocadastro (`/login` → Cadastre-se) envia e-mail de confirmação, o
caminho mais rápido para criar o primeiro acesso da equipe é pelo painel do
Supabase:

1. **Authentication → Users → Add user**
2. Informe e-mail e senha e marque **Auto Confirm User** (cria já confirmado).
3. Acesse `/login`, entre com essas credenciais e você será levado ao `/admin`.
