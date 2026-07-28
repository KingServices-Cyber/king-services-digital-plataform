-- Tabelas da Área do Cliente (/area-cliente): contratos, chamados, faturas,
-- projetos e documentos, cada um pertencente a um cliente (client_id).

-- Contratos
create table public.contracts (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'active'
    check (status in ('active', 'pending', 'expired', 'cancelled')),
  start_date date,
  end_date date,
  monthly_value numeric(12, 2),
  created_at timestamptz not null default now()
);
comment on table public.contracts is 'Contratos de cada cliente, exibidos na Área do Cliente.';
create index contracts_client_id_idx on public.contracts (client_id);

-- Chamados / Suporte
create table public.tickets (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users (id) on delete cascade,
  subject text not null,
  description text not null,
  status text not null default 'open'
    check (status in ('open', 'in_progress', 'resolved', 'closed')),
  priority text not null default 'normal'
    check (priority in ('low', 'normal', 'high', 'urgent')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
comment on table public.tickets is 'Chamados de suporte abertos pelo cliente na Área do Cliente.';
create index tickets_client_id_idx on public.tickets (client_id);
create index tickets_status_idx on public.tickets (status);

-- Faturas
create table public.invoices (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users (id) on delete cascade,
  reference_month date not null,
  amount numeric(12, 2) not null,
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'overdue', 'cancelled')),
  due_date date,
  paid_at timestamptz,
  invoice_url text,
  created_at timestamptz not null default now()
);
comment on table public.invoices is 'Faturas de cada cliente, exibidas na Área do Cliente.';
create index invoices_client_id_idx on public.invoices (client_id);

-- Projetos
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  description text,
  status text not null default 'in_progress'
    check (status in ('planned', 'in_progress', 'completed', 'on_hold')),
  progress_pct int not null default 0 check (progress_pct between 0 and 100),
  started_at date,
  expected_end_at date,
  created_at timestamptz not null default now()
);
comment on table public.projects is 'Projetos de cada cliente, exibidos na Área do Cliente.';
create index projects_client_id_idx on public.projects (client_id);

-- Documentos
create table public.documents (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  category text not null default 'other'
    check (category in ('contract', 'invoice', 'report', 'other')),
  file_url text not null,
  created_at timestamptz not null default now()
);
comment on table public.documents is 'Documentos de cada cliente, exibidos na Área do Cliente.';
create index documents_client_id_idx on public.documents (client_id);
