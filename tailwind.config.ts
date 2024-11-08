import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
      gg: "428px",
    },
    extend: {
      colors: {
        logo: {
          "100": "#70A15F",
        },
        cont: {
          "100": "#565855",
        },
        pp: {
          "100": "#00000099",
        },
        or: {
          "100": "#00000080",
        },
        sigg: {
          "100": "#00000099",
        },
        already: {
          "100": "#00000099",
        },
        sec: {
          "100": "#FCF8F0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontFamily: {
      league: ["var(--font-league)"],
      lakwa: ["var(--font-lakwa)"],
      fenix: ["var(--font-fenix)"],
    },
    backgroundImage: {
      auth: 'url("/images/auth-bg.png")',
      authmob: 'url("/images/auth-mob.png")',
      rect: 'url("/images/recttt.png")',
    },
  },

  plugins: [require("tailwindcss-animate")],
};
export default config;
