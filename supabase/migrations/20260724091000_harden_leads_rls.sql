-- Endurece a política de INSERT anônimo com validação real de conteúdo,
-- impedindo que visitantes forjem status/source ou enviem payloads abusivos.
drop policy "Public can insert leads" on public.leads;

create policy "Public can insert leads"
  on public.leads
  for insert
  to anon
  with check (
    char_length(name) between 1 and 200
    and status = 'new'
    and source = 'site-contato'
    and char_length(coalesce(email, '')) <= 320
    and char_length(coalesce(phone, '')) <= 40
    and char_length(coalesce(doc, '')) <= 40
    and char_length(coalesce(company, '')) <= 200
    and char_length(coalesce(subject, '')) <= 200
    and char_length(coalesce(message, '')) <= 5000
  );

-- Remove a política redundante: a equipe interna registra leads pelo painel,
-- não pelo formulário público. Mantemos apenas leitura e atualização para autenticados.
drop policy "Authenticated can insert leads" on public.leads;
