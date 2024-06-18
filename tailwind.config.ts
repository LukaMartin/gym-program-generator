import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#24305e",
        "blue": "#30407F",
        "light-red": "#f76c6c"
      },
      keyframes: {
        shrinkOnClick: {
          "0%": { transform: "scale(1)", opacaity: "1" },
          "100%": { transform: "scale(0.9)", opactiy: "1" },
        }
      },
      animation: {
        shrinkOnClick: "shrinkOnClick 0.2s 1 forwards",
      },
    },
  },
  plugins: [],
};
export default config;
