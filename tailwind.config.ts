import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        rotary: { DEFAULT: "#17458f", deep: "#0e2a5c", soft: "#3a6abf" },
        uwc: { DEFAULT: "#46988B", deep: "#2f6e64", soft: "#7bb9af" },
        ink: "#0a0f1f",
        paper: "#f7f5ef",
        cream: "#efeadd",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Open Sans", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Open Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(3rem, 9vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "huge": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%, 100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
