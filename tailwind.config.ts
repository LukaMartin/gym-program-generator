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
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        pulseStrong: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        pulseSlow: "pulseStrong 1.3s infinite",
        pulseRegular: "pulseStrong 1s infinite",
        pulseFast: "pulseStrong 0.7s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
