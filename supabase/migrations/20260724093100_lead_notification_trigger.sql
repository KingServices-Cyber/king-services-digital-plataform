-- Dispara a Edge Function notify-new-lead a cada novo lead.
-- SECURITY DEFINER: roda como owner (postgres) para poder ler o Vault e usar
-- pg_net, mesmo quando o INSERT vem do papel anônimo (formulário público).
--
-- Pré-requisito operacional (fora do repositório, ver supabase/README.md):
--   um segredo chamado 'notify_new_lead_secret' deve existir no Vault, com o
--   mesmo valor configurado como NOTIFY_SECRET na Edge Function.
create or replace function public.handle_new_lead_notify()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_secret text;
  v_url text := 'https://nupbetbitchsnwtccuew.supabase.co/functions/v1/notify-new-lead';
begin
  select decrypted_secret into v_secret
    from vault.decrypted_secrets
    where name = 'notify_new_lead_secret'
    limit 1;

  perform net.http_post(
    url := v_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-notify-secret', coalesce(v_secret, '')
    ),
    body := jsonb_build_object(
      'record', jsonb_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'email', NEW.email,
        'phone', NEW.phone,
        'doc_type', NEW.doc_type,
        'doc', NEW.doc,
        'message', NEW.message,
        'source', NEW.source,
        'created_at', NEW.created_at
      )
    )
  );

  return NEW;
end;
$$;

create trigger on_lead_created
  after insert on public.leads
  for each row
  execute function public.handle_new_lead_notify();
