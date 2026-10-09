import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
        },
        brandgreen: "var(--brand-green)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-system", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
