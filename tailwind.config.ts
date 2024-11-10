import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          1: "rgb(var(--color-bg1))",
          2: "rgb(var(--color-bg2))",
          3: "rgb(var(--color-bg3))",
          4: "rgb(var(--color-bg4))",
          5: "rgb(var(--color-bg5))",
          6: "rgb(var(--color-bg6))",
        },
        fg: {
          1: "rgb(var(--color-fg1))",
          2: "rgb(var(--color-fg2))",
          3: "rgb(var(--color-fg3))",
          4: "rgb(var(--color-fg4))",
          5: "rgb(var(--color-fg5))",
          6: "rgb(var(--color-fg6))",
        },
        mg: {
          1: "rgb(var(--color-mg1))",
          2: "rgb(var(--color-mg2))",
          3: "rgb(var(--color-mg3))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        "scale-hover": "transform 500ms ease-in-out",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(var(--color-bg3),1) 0%, rgba(var(--color-bg2),1) 100%)",
        "rg-hover":
          "radial-gradient(circle, rgba(var(--color-bg5),1) 0%, rgba(var(--color-fg5),1) 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".dark-image": {
          "@apply dark:grayscale dark:invert": {},
        },
        ".scale-hover": {
          transition: "transform 500ms ease",
          transform: "scale(1)",
          "&:hover": {
            transform: "scale(1.25)",
          },
        },
      });
    },
  ],
};
export default config;
