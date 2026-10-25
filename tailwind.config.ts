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
        canvas: "#fafafa",
        card: "#ededed",
        hairline: "#e5e7eb",
        divider: "#dadada",
        graphite: "#242424",
        ink: "#171717",
        pencil: "#5c5c5c",
        faint: "#a3a3a3",
        mist: "#5c5c5c",
        panel: "#ededed",
        electric: "#171717",
        pulse: "#171717",
        mint: "#171717",
        ember: "#171717"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"]
      },
      boxShadow: {
        bevel: "inset 0 4px 4px -2px rgba(255,255,255,0.25), inset 0 -4px 4px -2px rgba(0,0,0,0.25), inset -2px 0 2px -2px rgba(255,255,255,0.1)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
