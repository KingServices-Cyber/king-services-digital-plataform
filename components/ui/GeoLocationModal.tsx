"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/design-system";

const STORAGE_KEY = "ks-user-location";

const COVERED_CITIES = [
  "São José do Rio Preto",
  "Mirassol",
  "Bady Bassitt",
  "Cedral",
  "Guapiaçu",
  "Ipiguá",
  "Onda Verde",
  "Nova Granada",
  "José Bonifácio",
  "Tanabi",
  "Monte Aprazível",
  "Catanduva",
  "Votuporanga",
  "Fernandópolis",
  "Jales",
  "Franca",
];

const QUICK_CITIES = ["São José do Rio Preto", "Franca", "Catanduva", "Votuporanga"];

function normalizeCity(city: string) {
  return city
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function isCovered(city: string) {
  const n = normalizeCity(city);
  return COVERED_CITIES.some((c) => normalizeCity(c) === n);
}

type Step = "detecting" | "detected" | "changing" | "not-covered" | "error";

/* ── Ícone de pin ──────────────────────────────────────── */
function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

/* ── Botão primário ────────────────────────────────────── */
function BtnPrimary({ children, onClick, disabled }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-primary text-white font-bold text-sm py-3.5 rounded-xl hover:bg-primary-600 active:scale-[.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

/* ── Botão outline ─────────────────────────────────────── */
function BtnOutline({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full border-2 border-primary text-primary font-bold text-sm py-3.5 rounded-xl hover:bg-primary-50 active:scale-[.98] transition-all"
    >
      {children}
    </button>
  );
}

export function GeoLocationModal() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<Step>("detecting");
  const [city, setCity] = useState("");
  const [state] = useState("SP");
  const [manualInput, setManualInput] = useState("");
  const [manualError, setManualError] = useState("");

  const detectLocation = useCallback(() => {
    setStep("detecting");
    if (!navigator.geolocation) {
      setStep("error");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=pt-BR`,
            { headers: { "User-Agent": "KingServices/1.0" } },
          );
          const data = await res.json();
          const detected =
            data.address?.city ||
            data.address?.town ||
            data.address?.municipality ||
            data.address?.county ||
            "";
          if (detected) {
            setCity(detected);
            setStep("detected");
          } else {
            setStep("error");
          }
        } catch {
          setStep("error");
        }
      },
      () => setStep("error"),
      { enableHighAccuracy: false, timeout: 10000 },
    );
  }, []);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch { /* ignore */ }

    const t = setTimeout(() => {
      setVisible(true);
      detectLocation();
    }, 600);
    return () => clearTimeout(t);
  }, [detectLocation]);

  // Reabre o modal quando o usuário clica no indicador de localização no header
  useEffect(() => {
    function handleReopen() {
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
      setCity("");
      setManualInput("");
      setManualError("");
      setStep("detecting");
      setVisible(true);
      detectLocation();
    }
    window.addEventListener("ks-show-geo-modal", handleReopen);
    return () => window.removeEventListener("ks-show-geo-modal", handleReopen);
  }, [detectLocation]);

  function save(resolvedCity: string) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ city: resolvedCity, ts: Date.now() }));
      window.dispatchEvent(new Event("ks-location-updated"));
    } catch { /* ignore */ }
    setVisible(false);
  }

  function handleManualSubmit() {
    const trimmed = manualInput.trim();
    if (!trimmed) {
      setManualError("Informe o nome da sua cidade.");
      return;
    }
    setCity(trimmed);
    setManualError("");
    if (!isCovered(trimmed)) {
      setStep("not-covered");
    } else {
      save(trimmed);
    }
  }

  function handleClose() {
    save(city || "não informado");
  }

  if (!visible) return null;

  const covered = city ? isCovered(city) : false;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Card — estilo Claro, paleta King Services */}
      <div className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-up">

        {/* ── DETECTING ── */}
        {step === "detecting" && (
          <div className="flex flex-col items-center gap-4 px-8 py-10 text-center">
            <div className="w-11 h-11 rounded-full border-4 border-primary-200 border-t-primary animate-spin" />
            <div>
              <p className="font-bold text-text">Identificando sua localização…</p>
              <p className="text-sm text-text-secondary mt-1">Isso leva só um instante.</p>
            </div>
          </div>
        )}

        {/* ── DETECTED ── */}
        {step === "detected" && (
          <div className="px-8 py-7">
            {/* Cabeçalho: pin + cidade */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                <PinIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-[1.15rem] text-text leading-snug">
                  Você está em {city} / {state}?
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  {covered
                    ? "Aproveite ofertas exclusivas para sua cidade."
                    : "Ainda estamos expandindo para sua região."}
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col gap-2.5 mt-5">
              <BtnPrimary onClick={() => save(city)}>
                {covered ? "Estou nessa cidade" : "Quero ser avisado"}
              </BtnPrimary>
              <BtnOutline onClick={() => { setManualInput(""); setManualError(""); setStep("changing"); }}>
                Alterar cidade
              </BtnOutline>
            </div>
          </div>
        )}

        {/* ── CHANGING ── */}
        {step === "changing" && (
          <div className="px-8 py-7">
            {/* Voltar */}
            <button
              type="button"
              onClick={() => setStep(city ? "detected" : "error")}
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary mb-5 transition-colors"
              aria-label="Voltar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                <PinIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-text">Qual é a sua cidade?</p>
                <p className="text-sm text-text-secondary">Informe para vermos as ofertas disponíveis.</p>
              </div>
            </div>

            <input
              type="text"
              autoFocus
              value={manualInput}
              onChange={(e) => { setManualInput(e.target.value); setManualError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
              placeholder="Ex: São José do Rio Preto"
              className={cn(
                "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all mb-1",
                manualError
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-border focus:border-primary focus:ring-2 focus:ring-primary-100",
              )}
            />
            {manualError && <p className="text-xs text-red-500 mb-2">{manualError}</p>}

            {/* Sugestões rápidas */}
            <div className="flex flex-wrap gap-1.5 my-3">
              {QUICK_CITIES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setManualInput(s)}
                  className="text-xs px-3 py-1 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary-50 transition-colors text-text-secondary"
                >
                  {s}
                </button>
              ))}
            </div>

            <BtnPrimary onClick={handleManualSubmit} disabled={!manualInput.trim()}>
              Confirmar cidade
            </BtnPrimary>
          </div>
        )}

        {/* ── NOT COVERED ── */}
        {step === "not-covered" && (
          <div className="px-8 py-7 text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <p className="font-bold text-text text-lg">{city}</p>
            <p className="text-sm text-text-secondary mt-2 mb-6">
              Ainda não atendemos essa cidade, mas estamos expandindo. Deixe seu contato e avisamos quando chegarmos!
            </p>
            <div className="flex flex-col gap-2.5">
              <BtnPrimary onClick={() => save(city)}>Quero ser avisado</BtnPrimary>
              <BtnOutline onClick={() => { setManualInput(""); setStep("changing"); }}>
                Corrigir cidade
              </BtnOutline>
            </div>
          </div>
        )}

        {/* ── ERROR (GPS negado / falhou) ── */}
        {step === "error" && (
          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                <PinIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-text">Qual é a sua cidade?</p>
                <p className="text-sm text-text-secondary">Não conseguimos detectar sua localização.</p>
              </div>
            </div>

            <input
              type="text"
              autoFocus
              value={manualInput}
              onChange={(e) => { setManualInput(e.target.value); setManualError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
              placeholder="Ex: São José do Rio Preto"
              className={cn(
                "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all mb-1",
                manualError
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-border focus:border-primary focus:ring-2 focus:ring-primary-100",
              )}
            />
            {manualError && <p className="text-xs text-red-500 mb-2">{manualError}</p>}

            <div className="flex flex-wrap gap-1.5 my-3">
              {QUICK_CITIES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setManualInput(s)}
                  className="text-xs px-3 py-1 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary-50 transition-colors text-text-secondary"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <BtnPrimary onClick={handleManualSubmit} disabled={!manualInput.trim()}>
                Ver ofertas
              </BtnPrimary>
              <button
                type="button"
                onClick={detectLocation}
                title="Tentar GPS novamente"
                className="shrink-0 px-4 py-3 rounded-xl border-2 border-border hover:border-primary hover:text-primary text-text-secondary transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Fechar (X) */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
