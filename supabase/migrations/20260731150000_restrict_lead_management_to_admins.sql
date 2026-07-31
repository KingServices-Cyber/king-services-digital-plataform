-- The UI guard for /admin improves navigation, but data authorization must
-- be enforced by RLS in the database.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

drop policy if exists "Authenticated can read leads" on public.leads;
drop policy if exists "Authenticated can update leads" on public.leads;

create policy "Admins can read leads"
  on public.leads
  for select
  to authenticated
  using ((select public.is_admin()));

create policy "Admins can update leads"
  on public.leads
  for update
  to authenticated
  using ((select public.is_admin()))
  with check ((select public.is_admin()));
