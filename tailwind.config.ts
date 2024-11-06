import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#70A15",
        },
        cont: {
          "100": "#565855",
        },
        pp: {
          "100": "#00000099",
        },
      },
    },
    fontFamily: {
      league: ["var(--font-league)"],
      lakwa: ["var(--font-lakwa)"],
      fenix: ["var(--font-fenix)"],
    },
  },

  plugins: [],
};
export default config;
