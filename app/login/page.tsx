"use client";

import { FormEvent, useState } from "react";
import { EMAIL_REGEX, SENHA_CADASTRO_REGEX } from "@/lib/masks";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type View = "login" | "cadastro" | "esqueci";

export default function LoginPage() {
  const [view, setView] = useState<View>("login");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!EMAIL_REGEX.test(loginEmail.trim())) {
      setError("Informe um e-mail válido.");
      return;
    }

    setLoading(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: loginEmail.trim(),
        password: loginSenha,
      });
      if (signInError) {
        setError("E-mail ou senha inválidos.");
        return;
      }
      setSuccessMsg("✓ Login realizado com sucesso! Bem-vindo(a) à Área do Cliente.");
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Não foi possível entrar agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCadastro(e: FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("cad-email") as HTMLInputElement).value.trim();
    const senha = (form.elements.namedItem("cad-senha") as HTMLInputElement).value;
    const senha2 = (form.elements.namedItem("cad-senha2") as HTMLInputElement).value;

    if (!EMAIL_REGEX.test(email)) {
      setError("Informe um e-mail válido.");
      return;
    }
    if (!SENHA_CADASTRO_REGEX.test(senha)) {
      setError("A senha deve ter exatamente 8 caracteres, com letras, números e um caractere especial.");
      return;
    }
    if (senha !== senha2) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: signUpError } = await supabase.auth.signUp({ email, password: senha });
      if (signUpError) {
        setError(
          signUpError.message.toLowerCase().includes("already")
            ? "Este e-mail já possui cadastro. Faça login."
            : "Não foi possível criar a conta. Tente novamente.",
        );
        return;
      }
      setSuccessMsg(
        `✓ Conta criada! Enviamos um e-mail de confirmação para ${email}. Clique no link recebido para ativar sua conta.`,
      );
    } catch (err) {
      console.error("Erro no cadastro:", err);
      setError("Não foi possível criar a conta agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRecuperar(e: FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("rec-email") as HTMLInputElement).value.trim();
    if (!EMAIL_REGEX.test(email)) {
      setError("Informe um e-mail válido.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email);
      if (resetError) throw resetError;
      setSuccessMsg(`✓ Enviamos um link de recuperação de senha para ${email}.`);
    } catch (err) {
      console.error("Erro na recuperação de senha:", err);
      setError("Não foi possível enviar o link agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  function goTo(v: View) {
    setError("");
    setSuccessMsg(null);
    setView(v);
  }

  const inputClass = "w-full border border-fog rounded-lg px-3 py-2.5 text-base mb-4";
  const labelClass = "block text-[15px] font-medium mb-1.5";

  return (
    <div className="min-h-[400px] flex items-center justify-center bg-mist px-4 py-10">
      <div className="w-full max-w-[420px] bg-white border border-fog rounded-card p-6">
        {successMsg ? (
          <p className="text-[15px] text-purple-700 font-semibold">{successMsg}</p>
        ) : view === "login" ? (
          <form onSubmit={handleLogin}>
            <p className="text-center font-display font-semibold text-[15px] text-purple-900 mb-4.5">
              Área do Cliente
            </p>
            <label className={labelClass}>E-mail</label>
            <input
              type="email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className={inputClass}
            />
            <label className={labelClass}>Senha</label>
            <input
              type="password"
              required
              value={loginSenha}
              onChange={(e) => setLoginSenha(e.target.value)}
              className={inputClass}
            />
            <a
              onClick={() => goTo("esqueci")}
              className="block text-right text-[13px] text-purple-600 no-underline hover:underline -mt-2 mb-4 cursor-pointer"
            >
              Esqueci minha senha
            </a>
            {error && <p className="text-[13px] text-[#C0392B] -mt-2 mb-4">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white disabled:opacity-60"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
            <div className="flex items-center gap-2.5 my-4.5 text-xs text-[#9A9890]">
              <span className="flex-1 h-px bg-fog" />
              ou
              <span className="flex-1 h-px bg-fog" />
            </div>
            <a
              onClick={() => goTo("cadastro")}
              className="block text-center font-bold text-sm px-4 py-2.5 rounded-pill border-[1.5px] border-purple-600 text-purple-700 cursor-pointer hover:bg-mist"
            >
              Cadastre-se
            </a>
          </form>
        ) : view === "cadastro" ? (
          <form onSubmit={handleCadastro}>
            <p className="text-center font-display font-semibold text-[15px] text-purple-900 mb-4.5">
              Criar conta — Área do Cliente
            </p>
            <label className={labelClass}>E-mail *</label>
            <input name="cad-email" type="email" required className={inputClass} />
            <label className={labelClass}>Senha *</label>
            <input
              name="cad-senha"
              type="password"
              placeholder="Mín. 8 caracteres"
              maxLength={8}
              required
              className={inputClass}
            />
            <p className="text-xs text-[#7A7871] -mt-3 mb-4">
              Deve conter letras, números e um caractere especial (máx. 8 caracteres)
            </p>
            <label className={labelClass}>Confirmar senha *</label>
            <input
              name="cad-senha2"
              type="password"
              placeholder="Repita a senha"
              maxLength={8}
              required
              className={inputClass}
            />
            {error && <p className="text-[13px] text-[#C0392B] -mt-3 mb-4">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white disabled:opacity-60"
            >
              {loading ? "Criando conta..." : "Criar conta"}
            </button>
            <a
              onClick={() => goTo("login")}
              className="block text-center text-[13px] text-purple-600 no-underline hover:underline mt-4 cursor-pointer"
            >
              Já tem conta? Entrar
            </a>
          </form>
        ) : (
          <form onSubmit={handleRecuperar}>
            <p className="text-center font-display font-semibold text-[15px] text-purple-900 mb-4.5">
              Recuperar senha
            </p>
            <p className="text-xs text-[#7A7871] mb-4">
              Informe seu e-mail cadastrado e enviaremos um link para redefinir sua senha.
            </p>
            <label className={labelClass}>E-mail *</label>
            <input name="rec-email" type="email" required className={inputClass} />
            {error && <p className="text-[13px] text-[#C0392B] -mt-3 mb-4">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar link de recuperação"}
            </button>
            <a
              onClick={() => goTo("login")}
              className="block text-center text-[13px] text-purple-600 no-underline hover:underline mt-4 cursor-pointer"
            >
              Voltar para o login
            </a>
          </form>
        )}
      </div>
    </div>
  );
}
