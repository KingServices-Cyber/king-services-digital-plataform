# Integracao futura: CRM King Services

## Objetivo

O KSDP continua sendo a origem de captacao de consentimento e de leads do
site. O CRM King Services, mantido por outro colaborador, sera o sistema de
operacao comercial. Esta separacao evita duplicar o CRM neste repositorio.

## Limite de responsabilidade

| Sistema           | Responsabilidade                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------- |
| KSDP              | Formulario, consentimento LGPD, registro inicial do lead e painel administrativo minimo. |
| CRM King Services | Pipeline, atividades comerciais, propostas, agenda, responsaveis e conversao.            |
| Integracao        | Entregar novos leads ao CRM de forma autenticada, idempotente e auditavel.               |

## Contrato minimo a alinhar com o time do CRM

Antes de habilitar qualquer chamada, confirmar com o responsavel pela API:

1. URL do ambiente de homologacao e da producao.
2. Metodo de autenticacao e rotacao de credenciais.
3. Endpoint para criar ou atualizar lead.
4. Campo de idempotencia: usar `ksdp_lead_id`, igual ao UUID de `public.leads.id`.
5. Campos aceitos, politica de duplicidade e resposta de sucesso.
6. Limites de requisicao, retentativas e canal de suporte para falhas.

Payload-base sugerido, sujeito ao contrato oficial da API:

```json
{
  "ksdp_lead_id": "uuid",
  "name": "Nome do contato",
  "email": "contato@empresa.com",
  "phone": "+5517999999999",
  "company": "Empresa",
  "message": "Necessidade informada",
  "source": "site-contato",
  "consent": { "captured_at": "2026-07-31T00:00:00Z", "purpose": "contato-comercial" }
}
```

CPF/CNPJ nao deve ser enviado por padrao. So inclua esse dado se houver base
legal, necessidade operacional comprovada e contrato de API explicito.

## Implementacao prevista

1. Aplicar as migrations do KSDP e verificar a RLS no Supabase.
2. Criar uma Edge Function privada no KSDP depois que a API do CRM estiver
   disponivel. A funcao deve ler credenciais apenas dos Secrets do Supabase,
   nunca de `NEXT_PUBLIC_*` ou do navegador.
3. Acionar a funcao apos o registro do lead, com retentativas limitadas e
   registro de erro sem armazenar payloads sensiveis em logs.
4. Registrar no KSDP somente o identificador externo e o estado de sincronizacao
   necessario para suporte. O CRM permanece como fonte da verdade do pipeline.
5. Testar em homologacao com um lead sintetico antes de habilitar producao.

## Criterios de aceite

- Um mesmo `ksdp_lead_id` nao cria dois leads no CRM.
- Falha do CRM nao impede a confirmacao de recebimento no KSDP.
- Credenciais nao aparecem no Git, no bundle do navegador ou em logs.
- O acesso aos leads no KSDP continua restrito a perfis `admin` via RLS.
- O responsavel pelo CRM aprova o mapeamento de dados e a estrategia de retry.

## Continuidade no Claude Code

Trabalhe em uma branch propria e mantenha as migrations imutaveis apos serem
aplicadas. Para iniciar a integracao, leia este documento, `supabase/README.md`
e as migrations de `supabase/migrations/`; em seguida, implemente somente a
Edge Function e a migration adicional que o contrato oficial da API exigir.
