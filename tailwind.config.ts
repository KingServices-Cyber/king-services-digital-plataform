import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          lighter: "#C4B5FD",
          50: "#EDE9FE",
          100: "#DDD6FE",
          200: "#C4B5FD",
          300: "#A78BFA",
          400: "#8B5CF6",
          500: "#7C3AED",
          600: "#6D28D9",
          700: "#5B21B6",
          800: "#4C1D95",
          900: "#2E1065",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F8FAFC",
          muted: "#F1F5F9",
        },
        text: {
          DEFAULT: "#1E293B",
          secondary: "#64748B",
          muted: "#94A3B8",
        },
        border: {
          DEFAULT: "#E2E8F0",
          light: "#F1F5F9",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        // Backward-compat aliases for existing pages
        purple: {
          600: "#6D28D9",
          700: "#5B21B6",
          900: "#2E1065",
        },
        lilac: {
          300: "#C4B5FD",
          500: "#A78BFA",
        },
        graphite: "#1E293B",
        mist: "#F8FAFC",
        fog: "#E2E8F0",
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
        soft: "0 2px 8px -2px rgba(124,58,237,0.08)",
        card: "0 4px 16px -4px rgba(124,58,237,0.12)",
        elevated: "0 8px 32px -8px rgba(124,58,237,0.18)",
        mega: "0 20px 60px -20px rgba(124,58,237,0.25)",
        header: "0 2px 16px -4px rgba(30,41,59,0.1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
