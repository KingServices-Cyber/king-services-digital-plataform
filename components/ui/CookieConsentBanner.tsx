"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/design-system";

const STORAGE_KEY = "ksdp-cookie-consent";

export function CookieConsentBanner({ className }: { className?: string } = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function handleChoice(accepted: boolean) {
    localStorage.setItem(STORAGE_KEY, accepted ? "accepted" : "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 bg-purple-900 text-white px-6 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]",
        "flex items-center justify-center gap-5 flex-wrap",
        className,
      )}
    >
      <p className="text-[13px] leading-relaxed max-w-[680px] text-white/85">
        Utilizamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa{" "}
        <Link href="/contato" className="text-lilac-300 underline hover:text-white">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="flex gap-2.5 flex-shrink-0">
        <button
          onClick={() => handleChoice(true)}
          className="px-5 py-2 rounded-pill text-[13px] font-semibold bg-white text-purple-900 border-none cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          Aceitar
        </button>
        <button
          onClick={() => handleChoice(false)}
          className="px-5 py-2 rounded-pill text-[13px] font-semibold bg-transparent text-white border border-white/30 cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          Rejeitar
        </button>
      </div>
    </div>
  );
}
