// Edge Function: notify-new-lead
//
// Recebe o lead recém-inserido (via trigger no banco + pg_net) e envia um
// e-mail de notificação para a equipe usando a API do Resend.
//
// Autenticação: a função roda com verify_jwt = false e valida um segredo
// compartilhado no header `x-notify-secret` (o mesmo valor guardado no Vault e
// enviado pelo trigger). Assim, apenas o banco consegue acioná-la.
//
// Variáveis de ambiente (configurar em Supabase → Edge Functions → Secrets):
//   NOTIFY_SECRET   segredo compartilhado (igual ao guardado no Vault)
//   RESEND_API_KEY  chave da API do Resend
//   NOTIFY_FROM     remetente verificado, ex.: "King Services <leads@kingservices.com.br>"
//   NOTIFY_TO       destinatário, ex.: "atendimento@kingservices.com.br"

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

type Lead = {
  id?: string;
  name?: string;
  email?: string | null;
  phone?: string | null;
  doc_type?: string | null;
  doc?: string | null;
  message?: string | null;
  source?: string | null;
  created_at?: string | null;
};

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function row(label: string, value?: string | null): string {
  if (!value) return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;">${label}</td><td style="padding:4px 0;color:#111827;">${escapeHtml(
    value,
  )}</td></tr>`;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const expectedSecret = Deno.env.get("NOTIFY_SECRET");
  if (expectedSecret && req.headers.get("x-notify-secret") !== expectedSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const lead = (body.record ?? body) as Lead;

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const from = Deno.env.get("NOTIFY_FROM") ?? "King Services <onboarding@resend.dev>";
  const to = Deno.env.get("NOTIFY_TO") ?? "atendimento@kingservices.com.br";

  // Sem chave configurada: não falha o pipeline — apenas registra e sai.
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY ausente — e-mail não enviado (lead recebido:", lead.name, ")");
    return new Response(JSON.stringify({ skipped: true, reason: "RESEND_API_KEY não configurada" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:520px;">
      <h2 style="color:#2A1240;">Novo lead recebido</h2>
      <p style="color:#374151;">Um novo contato foi enviado pelo site King Services.</p>
      <table style="border-collapse:collapse;font-size:14px;">
        ${row("Nome", lead.name)}
        ${row("E-mail", lead.email)}
        ${row("Telefone", lead.phone)}
        ${row((lead.doc_type ?? "Documento").toUpperCase(), lead.doc)}
        ${row("Mensagem", lead.message)}
        ${row("Origem", lead.source)}
        ${row("Recebido em", lead.created_at)}
      </table>
    </div>`;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email || undefined,
      subject: `Novo lead: ${lead.name ?? "sem nome"}`,
      html,
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text();
    console.error("Falha ao enviar e-mail pelo Resend:", resendRes.status, detail);
    return new Response(JSON.stringify({ error: "email_failed", status: resendRes.status }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
