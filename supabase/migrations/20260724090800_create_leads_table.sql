-- Tabela de leads capturados pelo formulário de contato do site King Services
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  doc_type text check (doc_type in ('cpf', 'cnpj')),
  doc text,
  company text,
  subject text,
  message text,
  source text not null default 'site-contato',
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'won', 'lost')),
  created_at timestamptz not null default now()
);

comment on table public.leads is 'Leads capturados pelo site (formulário de contato).';

create index leads_created_at_idx on public.leads (created_at desc);
create index leads_status_idx on public.leads (status);

-- Row Level Security: leads são dados privados.
alter table public.leads enable row level security;

-- Visitantes anônimos (formulário público) podem apenas INSERIR.
create policy "Public can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- Usuários autenticados (equipe interna) também podem inserir.
create policy "Authenticated can insert leads"
  on public.leads
  for insert
  to authenticated
  with check (true);

-- Somente usuários autenticados podem ler os leads.
create policy "Authenticated can read leads"
  on public.leads
  for select
  to authenticated
  using (true);

-- Somente usuários autenticados podem atualizar o status dos leads.
create policy "Authenticated can update leads"
  on public.leads
  for update
  to authenticated
  using (true)
  with check (true);
