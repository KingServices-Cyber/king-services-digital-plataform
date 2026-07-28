-- handle_new_user() só deve rodar via trigger, nunca ser chamada diretamente
-- pela API pública (PostgREST expõe funções de public por padrão).
revoke execute on function public.handle_new_user() from anon, authenticated, public;
