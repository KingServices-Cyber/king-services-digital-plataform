import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

let browserClient: SupabaseClient<Database> | undefined;

/**
 * Cliente Supabase para uso no navegador (componentes "use client").
 *
 * Criado de forma preguiçosa (lazy) na primeira chamada — nunca no topo do
 * módulo — para que o build/prerender do Next.js não falhe caso as variáveis
 * de ambiente não estejam presentes em tempo de compilação. O cliente só é
 * instanciado quando um handler do usuário realmente o utiliza.
 */
export function getSupabaseBrowserClient(): SupabaseClient<Database> {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Configuração do Supabase ausente. Defina NEXT_PUBLIC_SUPABASE_URL e " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY no arquivo .env.local (veja .env.example).",
    );
  }

  browserClient = createClient<Database>(url, anonKey);
  return browserClient;
}
