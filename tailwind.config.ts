import type { Config } from "tailwindcss";

/**
 * "Ember", the Caliente AI marketing design system.
 *
 * A warm ember accent on a cool blueprint-blue + ink foundation: construction's
 * own colours (hi-vis safety orange + drawing blue), made cinematic. `blueprint`
 * sits in the same blue family as the product app, tuned brighter for dark UI,
 * so the app and the marketing cohere. Full spec: BRAND.md
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C10",
        "ink-deep": "#070708",
        carbon: "#14161C",
        "carbon-high": "#1C1F28",
        ember: "#FF5C35",
        "ember-bright": "#FF7A57",
        "ember-deep": "#E0421F",
        blueprint: "#3B82F6",
        "blueprint-bright": "#5B9BFF",
        bone: "#F5F3EF",
        slate: "#9498A6",
        "slate-dim": "#7F828E",
        hairline: "#242732",
        "hairline-bright": "#343847",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-inter-tight)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        "ember-glow": "0 8px 36px -8px rgba(255, 92, 53, 0.5)",
        depth: "0 40px 120px -40px rgba(0, 0, 0, 0.9)",
      },
      backdropBlur: {
        glass: "14px",
      },
      keyframes: {
        "rise-in": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.75s cubic-bezier(0.16, 1, 0.3, 1) both",
        "glow-pulse": "glow-pulse 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
