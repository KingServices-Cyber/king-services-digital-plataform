"use client";

import { useEffect, useState } from "react";
import { cn } from "@/design-system";

const SLIDES = [
  {
    title: "Fibra Óptica na sua casa",
    subtitle: "Velocidade de até 500 Mbps para streaming, games e home office sem travamentos.",
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* background glow */}
        <ellipse cx="160" cy="160" rx="130" ry="90" fill="white" fillOpacity="0.06" />
        {/* house */}
        <path d="M90 180V130L160 85L230 130V180H90Z" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
        <path d="M70 135L160 72L250 135" stroke="white" strokeOpacity="0.6" strokeWidth="2.5" strokeLinecap="round"/>
        {/* door */}
        <rect x="140" y="148" width="40" height="32" rx="4" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
        {/* windows */}
        <rect x="100" y="138" width="28" height="22" rx="3" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
        <rect x="192" y="138" width="28" height="22" rx="3" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
        {/* wifi signal */}
        <path d="M160 108C148 108 137 113 130 121" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M160 108C172 108 183 113 190 121" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M160 116C153 116 147 119 143 124" stroke="#86EFAC" strokeWidth="2" strokeLinecap="round"/>
        <path d="M160 116C167 116 173 119 177 124" stroke="#86EFAC" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="160" cy="128" r="4" fill="#86EFAC"/>
        {/* speed lines */}
        <line x1="42" y1="155" x2="78" y2="155" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
        <line x1="35" y1="165" x2="78" y2="165" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="242" y1="155" x2="278" y2="155" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
        <line x1="242" y1="165" x2="285" y2="165" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round"/>
        {/* mbps badge */}
        <rect x="112" y="52" width="96" height="28" rx="14" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <text x="160" y="70" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="sans-serif">até 500 Mbps</text>
      </svg>
    ),
  },
  {
    title: "Internet Empresarial Dedicada",
    subtitle: "Link exclusivo com IP fixo, SLA contratual e gerente de conta dedicado para o seu negócio.",
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="160" cy="160" rx="130" ry="90" fill="white" fillOpacity="0.06" />
        {/* building */}
        <rect x="100" y="90" width="120" height="90" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
        {/* floors */}
        <line x1="100" y1="120" x2="220" y2="120" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
        <line x1="100" y1="150" x2="220" y2="150" strokeWidth="1" stroke="white" strokeOpacity="0.2"/>
        {/* windows grid */}
        {[115, 150, 185].map((x) =>
          [98, 128, 158].map((y) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="18" height="14" rx="2" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
          ))
        )}
        {/* antenna on top */}
        <line x1="160" y1="90" x2="160" y2="65" stroke="white" strokeOpacity="0.5" strokeWidth="2"/>
        <circle cx="160" cy="62" r="4" fill="#86EFAC"/>
        {/* signal waves */}
        <path d="M148 75C152 70 157 68 160 68" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M172 75C168 70 163 68 160 68" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M140 80C147 72 153 69 160 69" stroke="#86EFAC" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round"/>
        <path d="M180 80C173 72 167 69 160 69" stroke="#86EFAC" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round"/>
        {/* SLA badge */}
        <rect x="68" y="108" width="60" height="22" rx="11" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <text x="98" y="123" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">SLA 99,9%</text>
        {/* IP fixed badge */}
        <rect x="192" y="108" width="60" height="22" rx="11" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <text x="222" y="123" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">IP Fixo</text>
      </svg>
    ),
  },
  {
    title: "Suporte Humanizado 24/7",
    subtitle: "Atendimento real via WhatsApp, chat e telefone a qualquer hora, sem robôs nem filas.",
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="160" cy="150" rx="120" ry="80" fill="white" fillOpacity="0.06" />
        {/* headset person */}
        <circle cx="160" cy="95" r="32" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
        {/* head */}
        <circle cx="160" cy="88" r="18" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
        {/* headset arc */}
        <path d="M140 85C140 74 149 65 160 65C171 65 180 74 180 85" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* headset ears */}
        <rect x="136" y="83" width="8" height="14" rx="4" fill="white" fillOpacity="0.4" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
        <rect x="176" y="83" width="8" height="14" rx="4" fill="white" fillOpacity="0.4" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
        {/* mic */}
        <path d="M180 92V96C180 100 177 102 174 103" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
        {/* body/desk suggestion */}
        <path d="M128 120C130 112 138 108 160 108C182 108 190 112 192 120" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round"/>
        {/* chat bubbles */}
        <rect x="55" y="110" width="72" height="32" rx="10" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <path d="M85 142L80 152L95 142" fill="white" fillOpacity="0.15"/>
        <text x="91" y="130" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">Olá! Como posso</text>
        <text x="91" y="142" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">ajudar você?</text>

        <rect x="193" y="130" width="72" height="24" rx="10" fill="#86EFAC" fillOpacity="0.25" stroke="#86EFAC" strokeOpacity="0.4" strokeWidth="1"/>
        <path d="M235 154L240 162L225 154" fill="#86EFAC" fillOpacity="0.25"/>
        <text x="229" y="146" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">Preciso de suporte</text>

        {/* 24h badge */}
        <rect x="118" y="175" width="84" height="26" rx="13" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <text x="160" y="192" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="sans-serif">Atendimento 24/7</text>
      </svg>
    ),
  },
  {
    title: "Parceira Autorizada Vivo Empresas",
    subtitle: "Acesse o portfólio completo Vivo com o diferencial de um parceiro consultivo e suporte dedicado.",
    illustration: (
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="160" cy="150" rx="120" ry="80" fill="white" fillOpacity="0.06" />
        {/* shield */}
        <path d="M160 60L200 78V118C200 142 182 160 160 168C138 160 120 142 120 118V78L160 60Z" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
        {/* checkmark inside shield */}
        <path d="M144 114L155 125L176 102" stroke="#86EFAC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {/* crown */}
        <path d="M140 72L150 82L160 70L170 82L180 72" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        {/* connection nodes */}
        <circle cx="82" cy="140" r="14" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
        <circle cx="238" cy="140" r="14" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
        <circle cx="82" cy="185" r="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>
        <circle cx="238" cy="185" r="10" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.25" strokeWidth="1"/>
        {/* connection lines */}
        <line x1="96" y1="136" x2="120" y2="118" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="224" y1="136" x2="200" y2="118" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="82" y1="154" x2="82" y2="175" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3"/>
        <line x1="238" y1="154" x2="238" y2="175" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3"/>
        {/* stars */}
        {[[90,138],[75,142],[238+7,138],[238-7,142]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="#86EFAC" fillOpacity="0.7"/>
        ))}
        {/* badge */}
        <rect x="102" y="188" width="116" height="26" rx="13" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
        <text x="160" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">Parceira Vivo Empresas</text>
      </svg>
    ),
  },
];

const INTERVAL = 7000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Card */}
      <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        {/* Illustration */}
        <div className="w-full h-[200px] md:h-[220px] flex items-center justify-center p-4">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={cn(
                "absolute inset-0 p-4 flex items-center justify-center transition-opacity duration-700",
                i === current ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            >
              {s.illustration}
            </div>
          ))}
        </div>

        {/* Text overlay */}
        <div className="px-5 pb-5 pt-2 bg-black/10">
          <div className="relative overflow-hidden" style={{ minHeight: "72px" }}>
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className={cn(
                  "transition-all duration-500",
                  i === current ? "opacity-100 translate-y-0" : "absolute inset-0 opacity-0 translate-y-2 pointer-events-none",
                )}
              >
                <p className="text-white font-bold text-[15px] leading-snug mb-1">{s.title}</p>
                <p className="text-white/75 text-[12px] leading-relaxed">{s.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots + progress */}
      <div className="flex items-center gap-2 mt-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "rounded-full transition-all duration-300 focus:outline-none",
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/60",
            )}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-2 w-full max-w-[420px] h-0.5 bg-white/20 rounded-full overflow-hidden">
        <div
          key={current}
          className="h-full bg-white/60 rounded-full"
          style={{
            animation: `progress-bar ${INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes progress-bar {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}
