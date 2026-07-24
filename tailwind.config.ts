import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// Tokens extraídos do Design System aprovado na Fase 1
// (preview-multipagina-fase1-revisao.html) — não alterar sem aprovação.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#5B2A8C",
          700: "#4A2172",
          900: "#2A1240",
        },
        lilac: {
          300: "#C9A0F0",
          500: "#A873E0",
        },
        graphite: "#2A2438",
        mist: "#F7F6FA",
        fog: "#D8D3E0",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        mega: "0 20px 60px -20px rgba(91,42,140,0.35)",
        card: "0 10px 30px -12px rgba(91,42,140,0.3)",
        header: "0 4px 24px -8px rgba(42,18,64,0.15)",
      },
    },
  },
  plugins: [typography],
};

export default config;
