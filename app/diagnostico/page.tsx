"use client";

import { useState } from "react";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { mascararTelefone } from "@/lib/masks";

// ── Tipos ──────────────────────────────────────────────────────────────────

type ConnType = "dedicated" | "fiber" | "radio" | "unknown";
type Speed = "under100" | "100to300" | "300to1g" | "over1g";
type CollabTool = "m365" | "google" | "erp" | "basic";
type Remote = "full" | "partial" | "onsite";
type SecLevel = "advanced" | "intermediate" | "basic" | "none";
type CorpEmail = "all" | "partial" | "no";

interface Answers {
  nomeEmpresa: string;
  setor: string;
  tamanho: string;
  connType: ConnType | "";
  speed: Speed | "";
  collabTool: CollabTool | "";
  remote: Remote | "";
  secLevel: SecLevel | "";
  corpEmail: CorpEmail | "";
}

// ── Pontuação (max 100) ────────────────────────────────────────────────────
// Conectividade: 38 pts | Colaboração: 33 pts | Segurança: 29 pts

const SCORE: Record<string, Record<string, number>> = {
  connType:    { dedicated: 30, fiber: 20, radio: 10, unknown: 5 },
  speed:       { over1g: 8, "300to1g": 5, "100to300": 2, under100: 0 },
  collabTool:  { m365: 28, google: 24, erp: 15, basic: 5 },
  remote:      { full: 5, partial: 2, onsite: 0 },
  secLevel:    { advanced: 24, intermediate: 16, basic: 8, none: 0 },
  corpEmail:   { all: 5, partial: 2, no: 0 },
};

function calcScore(a: Answers): number {
  return (
    (SCORE.connType[a.connType] ?? 0) +
    (SCORE.speed[a.speed] ?? 0) +
    (SCORE.collabTool[a.collabTool] ?? 0) +
    (SCORE.remote[a.remote] ?? 0) +
    (SCORE.secLevel[a.secLevel] ?? 0) +
    (SCORE.corpEmail[a.corpEmail] ?? 0)
  );
}

function getLevel(score: number) {
  if (score >= 91) return { label: "Referência digital", color: "#10B981", bg: "#D1FAE5" };
  if (score >= 76) return { label: "Avançado", color: "#7C3AED", bg: "#EDE9FE" };
  if (score >= 51) return { label: "Em desenvolvimento", color: "#6D28D9", bg: "#EDE9FE" };
  if (score >= 26) return { label: "Básico", color: "#F59E0B", bg: "#FEF3C7" };
  return { label: "Inicial", color: "#EF4444", bg: "#FEE2E2" };
}

interface Rec {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}

function getRecommendations(a: Answers): Rec[] {
  const recs: Rec[] = [];

  if (a.connType !== "dedicated") {
    recs.push({
      icon: <IconWifi />,
      title: "Link dedicado empresarial",
      desc: "Migre para fibra dedicada com SLA garantido — elimina instabilidades e suporta crescimento.",
      href: "/solucoes/internet-empresarial",
    });
  }
  if (a.secLevel === "none" || a.secLevel === "basic") {
    recs.push({
      icon: <IconShield />,
      title: "Segurança digital corporativa",
      desc: "Implante proteção em camadas: VPN, antivírus gerenciado e backup em nuvem.",
      href: "/solucoes/seguranca-digital",
    });
  }
  if (a.collabTool === "basic" || a.collabTool === "erp") {
    recs.push({
      icon: <IconCloud />,
      title: "Soluções cloud e colaboração",
      desc: "Unifique comunicação e produtividade com Microsoft 365 ou uma plataforma cloud moderna.",
      href: "/solucoes/cloud",
    });
  }
  if (a.corpEmail === "no" || a.corpEmail === "partial") {
    recs.push({
      icon: <IconMail />,
      title: "E-mail e domínio corporativo",
      desc: "Profissionalize a comunicação da empresa com e-mail no domínio próprio e antispam.",
      href: "/contato",
    });
  }
  if (recs.length === 0) {
    recs.push({
      icon: <IconPhone />,
      title: "Telefonia IP e PABX em nuvem",
      desc: "Leve a comunicação corporativa ao próximo nível com PABX na nuvem e ramais ilimitados.",
      href: "/solucoes/telefonia-fixa-pabx",
    });
  }
  return recs.slice(0, 3);
}

// ── Ícones SVG inline ──────────────────────────────────────────────────────

function IconWifi() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconCloud() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

// ── Componentes de UI menores ──────────────────────────────────────────────

function OptionCard({
  selected,
  onClick,
  title,
  sub,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  sub?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-card border transition-all ${
        selected
          ? "border-primary bg-primary-50 ring-1 ring-primary"
          : "border-fog hover:border-primary-200 hover:bg-primary-50/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
            selected ? "border-primary bg-primary" : "border-fog"
          }`}
        >
          {selected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
        </span>
        <div>
          <p className={`text-sm font-medium leading-tight ${selected ? "text-primary-700" : "text-graphite"}`}>
            {title}
          </p>
          {sub && <p className="text-xs text-text-secondary mt-0.5">{sub}</p>}
        </div>
      </div>
    </button>
  );
}

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5 mb-6">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
              i < step
                ? "bg-primary text-white"
                : i === step
                ? "bg-primary text-white ring-2 ring-primary-200"
                : "bg-fog text-text-secondary"
            }`}
          >
            {i < step ? <IconCheck /> : i + 1}
          </div>
          {i < total - 1 && (
            <div className={`h-0.5 w-8 rounded-full transition-colors ${i < step ? "bg-primary" : "bg-fog"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Página principal ───────────────────────────────────────────────────────

export default function DiagnosticoPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    nomeEmpresa: "",
    setor: "",
    tamanho: "",
    connType: "",
    speed: "",
    collabTool: "",
    remote: "",
    secLevel: "",
    corpEmail: "",
  });

  // Lead capture (etapa 4 = resultado)
  const [leadNome, setLeadNome] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [lgpd, setLgpd] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const set = <K extends keyof Answers>(key: K, val: Answers[K]) =>
    setAnswers((prev) => ({ ...prev, [key]: val }));

  function canNext(): boolean {
    if (step === 0) return answers.nomeEmpresa.trim().length > 0 && answers.setor !== "" && answers.tamanho !== "";
    if (step === 1) return answers.connType !== "" && answers.speed !== "";
    if (step === 2) return answers.collabTool !== "" && answers.remote !== "";
    if (step === 3) return answers.secLevel !== "" && answers.corpEmail !== "";
    return true;
  }

  const score = calcScore(answers);
  const level = getLevel(score);
  const recs = getRecommendations(answers);

  async function handleSubmitLead(e: React.FormEvent) {
    e.preventDefault();
    setSendError("");
    setSending(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("leads").insert({
        name: leadNome.trim(),
        email: leadEmail.trim(),
        phone: leadPhone,
        message: `Diagnóstico de Maturidade Digital — Score: ${score}/100 | Nível: ${level.label} | Empresa: ${answers.nomeEmpresa} | Setor: ${answers.setor} | Funcionários: ${answers.tamanho}`,
        source: "diagnostico-maturidade",
        status: "new",
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      setSendError("Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Hero da página */}
      <div className="bg-hero-gradient-dark text-white py-10 px-4">
        <div className="max-w-[860px] mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-pill px-3 py-1 text-[11px] font-semibold text-white/85 mb-4">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
            KingServices AI
          </span>
          <h1 className="font-display font-bold text-[clamp(24px,4vw,40px)] leading-tight">
            Diagnóstico de Maturidade Digital
          </h1>
          <p className="mt-3 text-white/75 text-base max-w-lg">
            4 perguntas rápidas. Resultado personalizado em menos de 3 minutos.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <div className="max-w-[860px] mx-auto px-4 py-10">
        <div className="bg-white border border-fog rounded-card p-6 md:p-8 shadow-soft">

          {/* Etapas 0-3: perguntas */}
          {step < 4 && (
            <>
              <StepIndicator step={step} total={4} />

              {/* ETAPA 0 — Perfil */}
              {step === 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Etapa 1 de 4</p>
                  <h2 className="font-display font-semibold text-xl text-graphite mb-6">Perfil da empresa</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-graphite mb-1.5">Nome da empresa *</label>
                      <input
                        type="text"
                        required
                        value={answers.nomeEmpresa}
                        onChange={(e) => set("nomeEmpresa", e.target.value)}
                        placeholder="Ex: King Services Ltda"
                        className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-graphite mb-1.5">Setor *</label>
                        <select
                          required
                          value={answers.setor}
                          onChange={(e) => set("setor", e.target.value)}
                          className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                        >
                          <option value="">Selecione...</option>
                          <option>Comércio</option>
                          <option>Indústria</option>
                          <option>Saúde</option>
                          <option>Logística</option>
                          <option>Agronegócio</option>
                          <option>Educação</option>
                          <option>Serviços Profissionais</option>
                          <option>Construção Civil</option>
                          <option>Tecnologia</option>
                          <option>Outro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-graphite mb-1.5">Número de funcionários *</label>
                        <select
                          required
                          value={answers.tamanho}
                          onChange={(e) => set("tamanho", e.target.value)}
                          className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                        >
                          <option value="">Selecione...</option>
                          <option value="1-10">1 a 10</option>
                          <option value="11-50">11 a 50</option>
                          <option value="51-200">51 a 200</option>
                          <option value="+200">Acima de 200</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ETAPA 1 — Conectividade */}
              {step === 1 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Etapa 2 de 4 — Conectividade</p>
                  <h2 className="font-display font-semibold text-xl text-graphite mb-6">Como é a internet da sua empresa?</h2>
                  <p className="text-sm text-text-secondary mb-4">Tipo de conexão principal:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {([
                      { val: "dedicated", title: "Fibra dedicada (link dedicado)", sub: "Exclusivo, com SLA garantido" },
                      { val: "fiber", title: "Fibra compartilhada (FTTH)", sub: "Conexão residencial ou empresarial padrão" },
                      { val: "radio", title: "Rádio / 4G / satélite", sub: "Backup ou conexão principal sem fio" },
                      { val: "unknown", title: "Não sei / misto", sub: "Depende do local ou escritório" },
                    ] as { val: ConnType; title: string; sub: string }[]).map((o) => (
                      <OptionCard
                        key={o.val}
                        selected={answers.connType === o.val}
                        onClick={() => set("connType", o.val)}
                        title={o.title}
                        sub={o.sub}
                      />
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-graphite mb-1.5">Velocidade contratada (aproximada)</label>
                    <select
                      value={answers.speed}
                      onChange={(e) => set("speed", e.target.value as Speed)}
                      className="w-full sm:w-64 border border-fog rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                    >
                      <option value="">Selecione...</option>
                      <option value="under100">Até 100 Mbps</option>
                      <option value="100to300">100 a 300 Mbps</option>
                      <option value="300to1g">300 Mbps a 1 Gbps</option>
                      <option value="over1g">Acima de 1 Gbps</option>
                    </select>
                  </div>
                </div>
              )}

              {/* ETAPA 2 — Colaboração */}
              {step === 2 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Etapa 3 de 4 — Colaboração</p>
                  <h2 className="font-display font-semibold text-xl text-graphite mb-6">Como sua equipe trabalha e se comunica?</h2>
                  <p className="text-sm text-text-secondary mb-4">Principal ferramenta de colaboração:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {([
                      { val: "m365", title: "Microsoft 365 / Teams", sub: "Outlook, OneDrive, Teams, SharePoint" },
                      { val: "google", title: "Google Workspace", sub: "Gmail, Drive, Meet, Docs" },
                      { val: "erp", title: "Sistema próprio / ERP", sub: "Legado on-premise ou software exclusivo" },
                      { val: "basic", title: "E-mail + WhatsApp", sub: "Sem plataforma de colaboração unificada" },
                    ] as { val: CollabTool; title: string; sub: string }[]).map((o) => (
                      <OptionCard
                        key={o.val}
                        selected={answers.collabTool === o.val}
                        onClick={() => set("collabTool", o.val)}
                        title={o.title}
                        sub={o.sub}
                      />
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-graphite mb-1.5">Modelo de trabalho atual</label>
                    <select
                      value={answers.remote}
                      onChange={(e) => set("remote", e.target.value as Remote)}
                      className="w-full sm:w-64 border border-fog rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                    >
                      <option value="">Selecione...</option>
                      <option value="onsite">100% presencial</option>
                      <option value="partial">Híbrido (parte remoto)</option>
                      <option value="full">Maioria ou 100% remoto</option>
                    </select>
                  </div>
                </div>
              )}

              {/* ETAPA 3 — Segurança */}
              {step === 3 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">Etapa 4 de 4 — Segurança</p>
                  <h2 className="font-display font-semibold text-xl text-graphite mb-6">Como sua empresa protege os dados?</h2>
                  <p className="text-sm text-text-secondary mb-4">Nível de proteção atual:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {([
                      { val: "none", title: "Sem política formal", sub: "Sem antivírus centralizado ou controles definidos" },
                      { val: "basic", title: "Básica", sub: "Antivírus + firewall padrão" },
                      { val: "intermediate", title: "Intermediária", sub: "VPN, backup periódico, MFA em parte dos acessos" },
                      { val: "advanced", title: "Avançada", sub: "SOC, SIEM, LGPD mapeada, gestão ativa de riscos" },
                    ] as { val: SecLevel; title: string; sub: string }[]).map((o) => (
                      <OptionCard
                        key={o.val}
                        selected={answers.secLevel === o.val}
                        onClick={() => set("secLevel", o.val)}
                        title={o.title}
                        sub={o.sub}
                      />
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-graphite mb-1.5">Toda a equipe usa e-mail com domínio próprio?</label>
                    <select
                      value={answers.corpEmail}
                      onChange={(e) => set("corpEmail", e.target.value as CorpEmail)}
                      className="w-full sm:w-64 border border-fog rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                    >
                      <option value="">Selecione...</option>
                      <option value="all">Sim, todos os colaboradores</option>
                      <option value="partial">Apenas parte da equipe</option>
                      <option value="no">Não, usamos Gmail / Hotmail</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Botões de navegação */}
              <div className="flex items-center justify-between mt-8">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="text-sm text-text-secondary border border-fog rounded-pill px-5 py-2.5 hover:bg-mist transition-colors"
                  >
                    ← Voltar
                  </button>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className="inline-flex items-center gap-2 font-bold text-sm px-6 py-2.5 rounded-pill bg-gradient-to-br from-primary-600 to-primary text-white transition-all hover:shadow-elevated hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {step === 3 ? "Ver meu resultado" : "Próximo"}
                  <IconArrowRight />
                </button>
              </div>
            </>
          )}

          {/* RESULTADO (etapa 4) */}
          {step === 4 && (
            <div>
              <h2 className="font-display font-semibold text-xl text-graphite mb-6">
                Resultado — {answers.nomeEmpresa || "Sua empresa"}
              </h2>

              {/* Score visual */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-mist rounded-card p-5 mb-8 border border-fog">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke={level.color} strokeWidth="3"
                      strokeDasharray={`${score} ${100 - score}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-graphite">{score}</span>
                    <span className="text-xs text-text-secondary">/ 100</span>
                  </div>
                </div>
                <div>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-pill mb-2"
                    style={{ background: level.bg, color: level.color }}
                  >
                    {level.label}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                    {getLevel(score).label === "Referência digital"
                      ? "Excelente! Sua empresa é referência em maturidade digital. Continue investindo para manter a vantagem competitiva."
                      : getLevel(score).label === "Avançado"
                      ? "Ótimo desempenho! Sua empresa tem operação digital madura. Pequenos ajustes podem elevar ainda mais sua pontuação."
                      : getLevel(score).label === "Em desenvolvimento"
                      ? "Boas práticas já em andamento. Foque na consolidação das áreas mais críticas para acelerar sua transformação digital."
                      : getLevel(score).label === "Básico"
                      ? "Base funcional estabelecida, mas com riscos significativos. Priorize segurança e conectividade imediatamente."
                      : "Conectividade e segurança são pontos críticos. Recomendamos iniciar a transformação digital com os passos fundamentais."}
                  </p>
                </div>
              </div>

              {/* Recomendações */}
              <h3 className="font-semibold text-base text-graphite mb-4">Prioridades recomendadas para {answers.nomeEmpresa || "sua empresa"}:</h3>
              <div className="space-y-3 mb-8">
                {recs.map((r, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-fog rounded-card hover:border-primary-200 transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      {r.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-graphite mb-0.5">{r.title}</p>
                      <p className="text-xs text-text-secondary leading-relaxed">{r.desc}</p>
                    </div>
                    <Link
                      href={r.href}
                      className="text-primary text-xs font-semibold self-center flex-shrink-0 hover:text-primary-700 flex items-center gap-1"
                    >
                      Ver mais <IconArrowRight />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Lead capture */}
              <div className="border-t border-fog pt-7">
                {submitted ? (
                  <div className="bg-primary-50 border border-primary-200 rounded-card p-5 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto mb-3 text-white">
                      <IconCheck />
                    </div>
                    <p className="font-semibold text-primary-700 mb-1">Diagnóstico enviado com sucesso!</p>
                    <p className="text-sm text-text-secondary">
                      Um especialista King Services entrará em contato em breve para apresentar as melhores soluções para sua empresa.
                    </p>
                    <Link
                      href="/contato"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-white bg-primary px-5 py-2.5 rounded-pill hover:bg-primary-600 transition-colors"
                    >
                      Falar pelo WhatsApp também
                    </Link>
                  </div>
                ) : (
                  <>
                    <p className="font-semibold text-base text-graphite mb-1">Receba um relatório completo</p>
                    <p className="text-sm text-text-secondary mb-5">
                      Deixe seu contato e um especialista King Services apresenta um plano personalizado para a sua pontuação.
                    </p>
                    <form onSubmit={handleSubmitLead} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-graphite mb-1.5">Nome *</label>
                          <input
                            type="text"
                            required
                            value={leadNome}
                            onChange={(e) => setLeadNome(e.target.value)}
                            className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-graphite mb-1.5">E-mail *</label>
                          <input
                            type="email"
                            required
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            className="w-full border border-fog rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-graphite mb-1.5">WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(mascararTelefone(e.target.value))}
                          placeholder="(00) 00000-0000"
                          maxLength={15}
                          className="w-full sm:w-64 border border-fog rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary"
                        />
                      </div>

                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={lgpd}
                          onChange={(e) => setLgpd(e.target.checked)}
                          className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 accent-primary cursor-pointer"
                        />
                        <span className="text-[12.5px] leading-relaxed text-graphite/70">
                          Concordo com o tratamento dos meus dados conforme a{" "}
                          <Link href="/contato" className="text-primary underline hover:text-primary-700">
                            Política de Privacidade (LGPD)
                          </Link>{" "}
                          da King Services.
                        </span>
                      </label>

                      {sendError && <p className="text-xs text-error">{sendError}</p>}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="submit"
                          disabled={sending || !lgpd}
                          className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-2.5 rounded-pill bg-gradient-to-br from-primary-600 to-primary text-white transition-all hover:shadow-elevated hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                        >
                          {sending ? "Enviando..." : "Receber relatório completo"}
                          {!sending && <IconArrowRight />}
                        </button>
                        <Link
                          href="/contato"
                          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary border border-primary-200 px-5 py-2.5 rounded-pill hover:bg-primary-50 transition-colors"
                        >
                          Ou fale diretamente conosco
                        </Link>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {/* Refazer */}
              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setAnswers({ nomeEmpresa: "", setor: "", tamanho: "", connType: "", speed: "", collabTool: "", remote: "", secLevel: "", corpEmail: "" });
                  setSubmitted(false);
                  setSendError("");
                  setLeadNome(""); setLeadEmail(""); setLeadPhone(""); setLgpd(false);
                }}
                className="mt-6 text-xs text-text-secondary hover:text-primary transition-colors"
              >
                ↩ Refazer o diagnóstico
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
