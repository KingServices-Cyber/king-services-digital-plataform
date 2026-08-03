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

function normalizeCity(city: string) {
  return city.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

function isCovered(city: string) {
  const n = normalizeCity(city);
  return COVERED_CITIES.some((c) => normalizeCity(c) === n);
}

type Step =
  | "detecting"
  | "detected"
  | "changing"
  | "not-covered"
  | "error";

export function GeoLocationModal() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<Step>("detecting");
  const [city, setCity] = useState("");
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

  function save(resolvedCity: string) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ city: resolvedCity, ts: Date.now() }));
    } catch { /* ignore */ }
    setVisible(false);
  }

  function handleConfirm() {
    save(city);
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
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={handleClose}
      />

      {/* Card */}
      <div className="relative w-full sm:max-w-md bg-white sm:rounded-2xl shadow-mega overflow-hidden animate-fade-up">
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ── DETECTING ── */}
        {step === "detecting" && (
          <div className="flex items-center gap-4 px-6 py-5">
            <div className="w-9 h-9 shrink-0 rounded-full border-2 border-primary-200 border-t-primary animate-spin" />
            <div>
              <p className="font-semibold text-text text-sm">Identificando sua localização…</p>
              <p className="text-xs text-text-secondary mt-0.5">Isso leva só um instante.</p>
            </div>
          </div>
        )}

        {/* ── DETECTED ── */}
        {step === "detected" && (
          <div className="px-6 py-5">
            <div className="flex items-start gap-3 mb-4">
              {/* Pin icon */}
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                covered ? "bg-green-100" : "bg-amber-100",
              )}>
                <svg
                  className={cn("w-5 h-5", covered ? "text-green-600" : "text-amber-600")}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-0.5">
                  Verificamos que você está em
                </p>
                <p className="font-display font-bold text-lg text-text leading-tight">{city}</p>
                {covered ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 mt-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Atendemos sua região
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5 mt-1">
                    Em breve na sua cidade
                  </span>
                )}
              </div>
            </div>

            {covered ? (
              <p className="text-sm text-text-secondary mb-4">
                Quer conferir as <span className="font-semibold text-primary">ofertas disponíveis para {city}</span>?
              </p>
            ) : (
              <p className="text-sm text-text-secondary mb-4">
                Ainda estamos expandindo para <span className="font-semibold">{city}</span>. Deixe seu contato e avisamos quando chegarmos!
              </p>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleConfirm}
                className="flex-1 bg-primary text-white font-bold text-sm py-3 rounded-xl hover:bg-primary-600 transition-colors"
              >
                {covered ? "Ver ofertas" : "Quero ser avisado"}
              </button>
              <button
                type="button"
                onClick={() => { setManualInput(""); setManualError(""); setStep("changing"); }}
                className="flex-1 bg-surface-secondary text-text font-semibold text-sm py-3 rounded-xl hover:bg-border transition-colors"
              >
                Trocar localização
              </button>
            </div>
          </div>
        )}

        {/* ── CHANGING ── */}
        {step === "changing" && (
          <div className="px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <button
                type="button"
                onClick={() => setStep(city ? "detected" : "error")}
                className="text-text-secondary hover:text-text transition-colors"
                aria-label="Voltar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="font-display font-semibold text-text">Trocar localização</p>
            </div>

            <p className="text-sm text-text-secondary mb-3">
              Informe sua cidade para vermos os planos disponíveis na sua região:
            </p>

            <div className="relative mb-2">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <input
                type="text"
                autoFocus
                value={manualInput}
                onChange={(e) => { setManualInput(e.target.value); setManualError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
                placeholder="Ex: São José do Rio Preto"
                className={cn(
                  "w-full pl-9 pr-4 py-3 rounded-xl border text-sm outline-none transition-all",
                  manualError
                    ? "border-error focus:ring-2 focus:ring-red-100"
                    : "border-border focus:border-primary focus:ring-2 focus:ring-primary-50",
                )}
              />
            </div>
            {manualError && <p className="text-xs text-error mb-2">{manualError}</p>}

            {/* Sugestões rápidas */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {["São José do Rio Preto", "Franca", "Catanduva", "Votuporanga"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setManualInput(s)}
                  className="text-xs px-2.5 py-1 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-text-secondary"
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleManualSubmit}
              disabled={!manualInput.trim()}
              className="w-full bg-primary text-white font-bold text-sm py-3 rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Confirmar cidade
            </button>
          </div>
        )}

        {/* ── NOT COVERED ── */}
        {step === "not-covered" && (
          <div className="px-6 py-5 text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <p className="font-display font-bold text-text">{city}</p>
            <p className="text-sm text-text-secondary mt-1 mb-4">
              Ainda não atendemos essa cidade, mas estamos expandindo. Deixe seu contato e avisamos assim que chegarmos!
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => save(city)}
                className="flex-1 bg-primary text-white font-bold text-sm py-3 rounded-xl hover:bg-primary-600 transition-colors"
              >
                Quero ser avisado
              </button>
              <button
                type="button"
                onClick={() => { setManualInput(""); setStep("changing"); }}
                className="flex-1 bg-surface-secondary text-text font-semibold text-sm py-3 rounded-xl hover:bg-border transition-colors"
              >
                Corrigir cidade
              </button>
            </div>
          </div>
        )}

        {/* ── ERROR ── */}
        {step === "error" && (
          <div className="px-6 py-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-text text-sm">Qual é a sua cidade?</p>
                <p className="text-xs text-text-secondary">Não conseguimos detectar sua localização.</p>
              </div>
            </div>

            <div className="relative mb-2">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <input
                type="text"
                autoFocus
                value={manualInput}
                onChange={(e) => { setManualInput(e.target.value); setManualError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
                placeholder="Ex: São José do Rio Preto"
                className={cn(
                  "w-full pl-9 pr-4 py-3 rounded-xl border text-sm outline-none transition-all",
                  manualError
                    ? "border-error focus:ring-2 focus:ring-red-100"
                    : "border-border focus:border-primary focus:ring-2 focus:ring-primary-50",
                )}
              />
            </div>
            {manualError && <p className="text-xs text-error mb-2">{manualError}</p>}

            <div className="flex flex-wrap gap-1.5 mb-4">
              {["São José do Rio Preto", "Franca", "Catanduva", "Votuporanga"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setManualInput(s)}
                  className="text-xs px-2.5 py-1 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-text-secondary"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleManualSubmit}
                disabled={!manualInput.trim()}
                className="flex-1 bg-primary text-white font-bold text-sm py-3 rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Ver ofertas
              </button>
              <button
                type="button"
                onClick={detectLocation}
                className="px-4 py-3 rounded-xl border border-border hover:border-primary hover:text-primary text-text-secondary text-sm font-medium transition-colors"
                title="Tentar GPS novamente"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
