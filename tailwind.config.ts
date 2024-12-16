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
      footClash: "880px",

      mainClash: "905px",
    },
    extend: {
      textShadow: {
        border:
          "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
      },
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
        fol: {
          "100": "#FAF2E2B2",
        },
        offer: {
          "100": "#00000099",
        },
        kairo: {
          "100": "#C8C0B1",
        },
        inf: {
          "100": "#3E413C",
        },
        here: {
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
      pan: 'url("/images/getStarted.png")',
      board: 'url("/images/board.png")',
      greenBasket: 'url("/images/greenBasket.png")',
    },
  },

  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, { [key: string]: string }>,
        variants: string[]
      ) => void;
    }) {
      const newUtilities = {
        ".text-border": {
          textShadow:
            "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("tailwindcss-animate"),
  ],
};
export default config;
