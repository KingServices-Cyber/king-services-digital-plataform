"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ks-user-location";

export function LocationIndicator() {
  const [city, setCity] = useState<string | null>(null);

  function readCity() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) { setCity(null); return; }
      const parsed = JSON.parse(raw) as { city?: string };
      setCity(parsed.city && parsed.city !== "não informado" ? parsed.city : null);
    } catch {
      setCity(null);
    }
  }

  useEffect(() => {
    readCity();

    // Atualiza quando o modal salva uma cidade
    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY) readCity();
    }
    // Evento customizado para sincronização na mesma aba
    function onUpdate() { readCity(); }

    window.addEventListener("storage", onStorage);
    window.addEventListener("ks-location-updated", onUpdate);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("ks-location-updated", onUpdate);
    };
  }, []);

  function handleClick() {
    window.dispatchEvent(new Event("ks-show-geo-modal"));
  }

  if (!city) return null;

  // Trunca cidades longas para caber na top bar
  const display = city.length > 22 ? city.slice(0, 20) + "…" : city;

  return (
    <button
      type="button"
      onClick={handleClick}
      title={`Sua localização: ${city} — clique para alterar`}
      className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group"
    >
      <svg
        className="w-3.5 h-3.5 shrink-0 text-primary-300 group-hover:text-white transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      <span className="truncate max-w-[160px]">{display} / SP</span>
    </button>
  );
}
