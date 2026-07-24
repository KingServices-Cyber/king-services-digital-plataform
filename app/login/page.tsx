"use client";

import { FormEvent, useState } from "react";
import { EMAIL_REGEX, SENHA_CADASTRO_REGEX } from "@/lib/masks";

type View = "login" | "cadastro" | "esqueci";

export default function LoginPage() {
  const [view, setView] = useState<View>("login");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    alert("Login simulado — no site real, isso levaria ao Dashboard.");
  }

  function handleCadastro(e: FormEvent) {
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
    setSuccessMsg(
      `✓ Conta criada! Enviamos um e-mail de confirmação para ${email}. Clique no link recebido para ativar sua conta.`,
    );
  }

  function handleRecuperar(e: FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("rec-email") as HTMLInputElement).value.trim();
    if (!EMAIL_REGEX.test(email)) {
      setError("Informe um e-mail válido.");
      return;
    }
    setError("");
    setSuccessMsg(`✓ Enviamos um link de recuperação de senha para ${email}.`);
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
            <input type="email" className={inputClass} />
            <label className={labelClass}>Senha</label>
            <input type="password" className={inputClass} />
            <a
              onClick={() => goTo("esqueci")}
              className="block text-right text-[13px] text-purple-600 no-underline hover:underline -mt-2 mb-4 cursor-pointer"
            >
              Esqueci minha senha
            </a>
            <button
              type="submit"
              className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white"
            >
              Entrar
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
              className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white"
            >
              Criar conta
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
              className="w-full text-center font-bold text-sm px-4 py-2.5 rounded-pill bg-gradient-to-br from-purple-600 to-lilac-500 text-white"
            >
              Enviar link de recuperação
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
