-- Tabela de planos de internet
create table if not exists public.plans (
  id text primary key,
  name text not null,
  subtitle text,
  speed text not null,
  price_monthly numeric(10,2) not null,
  price_annual numeric(10,2) not null,
  features jsonb not null default '[]'::jsonb,
  highlighted boolean not null default false,
  badge text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Tabela de depoimentos
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  quote text not null,
  rating integer not null default 5 check (rating >= 1 and rating <= 5),
  approved boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- Tabela de FAQ
create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- RLS: planos são públicos para leitura
alter table public.plans enable row level security;
create policy "Plans are viewable by everyone"
  on public.plans for select
  using (active = true);

-- RLS: depoimentos aprovados são públicos
alter table public.testimonials enable row level security;
create policy "Approved testimonials are viewable by everyone"
  on public.testimonials for select
  using (approved = true);

-- RLS: FAQs ativos são públicos
alter table public.faqs enable row level security;
create policy "Active FAQs are viewable by everyone"
  on public.faqs for select
  using (active = true);

-- Inserir planos iniciais
insert into public.plans (id, name, subtitle, speed, price_monthly, price_annual, features, highlighted, badge, sort_order) values
  ('basico', 'Básico', 'Navegue com estabilidade para o dia a dia.', '50 Mbps', 99.90, 79.90, '["Navegação leve, redes sociais, vídeos em HD", "Instalação grátis", "Wi-Fi potente", "Suporte ágil e dedicado"]', false, null, 1),
  ('essencial', 'Essencial', 'Mais velocidade para trabalho, vídeo e diversão.', '150 Mbps', 149.90, 119.90, '["Streaming em Full HD, chamadas de vídeo, home office", "Instalação grátis", "Wi-Fi potente", "Suporte ágil e dedicado"]', true, 'Mais Popular', 2),
  ('turbo', 'Turbo', 'Navegue com estabilidade para o dia a dia.', '300 Mbps', 199.90, 169.90, '["Casas conectadas, jogos online, múltiplos dispositivos", "Instalação grátis", "Wi-Fi com alcance ampliado", "Suporte ágil e dedicado"]', false, null, 3),
  ('ultra', 'Ultra', 'Velocidade máxima para quem exige o melhor.', '500 Mbps', 279.90, 229.90, '["Ideal para empresas e escritórios", "Upload simétrico", "Wi-Fi mesh incluso", "Suporte prioritário 24/7", "IP fixo disponível"]', false, 'Empresarial', 4)
on conflict (id) do nothing;

-- Inserir depoimentos iniciais
insert into public.testimonials (name, role, quote, rating, approved, sort_order) values
  ('Roberto M.', 'Diretor de TI — Indústria', 'A King Services transformou nossa infraestrutura de telecomunicação. O atendimento consultivo fez toda a diferença na escolha das soluções certas para nosso negócio.', 5, true, 1),
  ('Carla S.', 'Gerente de Operações — Comércio', 'Desde que migramos para a King Services, nosso suporte técnico ficou muito mais ágil. O pós-venda ativo realmente funciona.', 5, true, 2),
  ('Fernando L.', 'CEO — Logística', 'Conectividade estável em todas as nossas filiais era um desafio. A King Services entregou a solução completa com internet dedicada e monitoramento 24/7.', 5, true, 3),
  ('Mariana T.', 'Proprietária — Escritório de Advocacia', 'Excelente custo-benefício e o melhor: sem burocracia. Em poucos dias já estava tudo funcionando perfeitamente.', 5, true, 4);

-- Inserir FAQs iniciais
insert into public.faqs (question, answer, sort_order) values
  ('Qual a cobertura da King Services?', 'Atendemos São José do Rio Preto e região com fibra óptica de alta velocidade. Consulte a disponibilidade para o seu endereço.', 1),
  ('Como funciona a instalação?', 'A instalação é gratuita e feita em até 48h após a contratação. Nossa equipe técnica cuida de tudo, incluindo a configuração do Wi-Fi.', 2),
  ('Posso trocar de plano depois?', 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento, sem multa ou burocracia.', 3),
  ('Existe fidelidade?', 'No plano mensal não há fidelidade. O plano anual tem desconto especial com permanência mínima de 12 meses.', 4),
  ('Como funciona o suporte técnico?', 'Nosso suporte funciona 24/7 via WhatsApp, telefone e chat. Você fala com pessoas reais, sem robôs.', 5);
