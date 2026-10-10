import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-warm": "var(--surface-warm)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
        },
        "primary-soft": "var(--primary-soft)",
        brandgreen: "var(--brand-green)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22,19,17,0.05)",
        glow: "0 8px 24px -12px rgba(22,19,17,0.14)",
        card: "0 8px 24px -12px rgba(22,19,17,0.14)",
      },
      borderRadius: {
        heaven: "14px",
        hero: "18px",
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        display: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
