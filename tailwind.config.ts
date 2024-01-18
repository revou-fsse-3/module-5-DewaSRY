import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fire: "#ff7402",
        grass: "#9bcc50",
        steel: "#9eb7b8",
        water: "#4592c4",
        psychic: "#f366b9",
        ground: "#ab9842",
        ice: "#51c4e7",
        flying: "#3dc7ef",
        ghost: "#4d5b64",
        normal: "#a4acaf",
        poison: "#7e0058",
        rock: "#a38c21",
        fighting: "#d56723",
        dark: "#707070",
        bug: "#729f3f",
        dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
        electric: " #bba909",
        fairy: "#fdb9e9",
        shadow: "#7b62a3",
        unknow: "#757575",
        card: " rgba(0, 0, 255, 0.2)",
        title: "rgba(200, 200, 200, 0.509)",
        "primary-hover": "#83c5be",
        "main-bg": "#111827",
      },
      gridTemplateColumns: {
        table: "10px 50px 300px repeat(3, 200px) 75px",
        "pokemon-table": "repeat(auto-fit, minmax(300px, 310px)) ",
        "pokemon-gallery": "repeat(auto-fit, 300px)",
        "pokemon-display": "400px 1fr",
      },
      gridTemplateRows: {
        "pokemon-gallery": "repeat(4, 200px)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
          "0%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
