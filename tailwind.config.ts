import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        panel: "#f5f5f5",
        mist: "#525252",
        electric: "#0a0a0a",
        pulse: "#0a0a0a",
        mint: "#0a0a0a",
        ember: "#0a0a0a"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Geist", "Satoshi", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
