-- Permite que usuários autenticados também insiram leads pelo formulário de contato.
-- Mesmas restrições da política anon: status=new, source=site-contato, limites de tamanho.
CREATE POLICY "Authenticated can insert leads"
  ON public.leads
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (char_length(name) >= 1 AND char_length(name) <= 200)
    AND status = 'new'
    AND source = 'site-contato'
    AND char_length(COALESCE(email, '')) <= 320
    AND char_length(COALESCE(phone, '')) <= 40
    AND char_length(COALESCE(doc, '')) <= 40
    AND char_length(COALESCE(company, '')) <= 200
    AND char_length(COALESCE(subject, '')) <= 200
    AND char_length(COALESCE(message, '')) <= 5000
  );
