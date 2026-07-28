-- Perfil e papel (role) de cada usuário autenticado, usado para separar o
-- Painel do Administrador (/admin) da Área do Cliente (/area-cliente).
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'client' check (role in ('client', 'admin')),
  created_at timestamptz not null default now()
);

comment on table public.profiles is 'Perfil e papel (role) de cada usuário autenticado. Criado automaticamente via trigger em auth.users.';

create index profiles_role_idx on public.profiles (role);

alter table public.profiles enable row level security;

-- Cada usuário só pode ler o próprio perfil (necessário no client-side para decidir redirect).
create policy "Users can read own profile"
  on public.profiles
  for select
  to authenticated
  using (id = auth.uid());
