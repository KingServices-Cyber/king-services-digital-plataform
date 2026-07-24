-- Habilita o pg_net para chamadas HTTP assíncronas a partir do banco
-- (usado pelo trigger de notificação de novos leads).
create extension if not exists pg_net;
