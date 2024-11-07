import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },

  plugins: [require("tailwindcss-animate")],
};
export default config;
