-- RLS das tabelas da Área do Cliente: cada cliente só lê suas próprias
-- linhas (client_id = auth.uid()). Chamados também aceita insert do próprio
-- cliente (é como a página Suporte abre um chamado novo).
alter table public.contracts enable row level security;
alter table public.tickets enable row level security;
alter table public.invoices enable row level security;
alter table public.projects enable row level security;
alter table public.documents enable row level security;

create policy "Clients can read own contracts"
  on public.contracts for select to authenticated using (client_id = auth.uid());

create policy "Clients can read own tickets"
  on public.tickets for select to authenticated using (client_id = auth.uid());

create policy "Clients can create own tickets"
  on public.tickets for insert to authenticated with check (client_id = auth.uid());

create policy "Clients can read own invoices"
  on public.invoices for select to authenticated using (client_id = auth.uid());

create policy "Clients can read own projects"
  on public.projects for select to authenticated using (client_id = auth.uid());

create policy "Clients can read own documents"
  on public.documents for select to authenticated using (client_id = auth.uid());
