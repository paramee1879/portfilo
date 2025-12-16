import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-top": "slide-in-top 0.5s ease-out forwards",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "retro", "emerald", "caramellatte", "lemonade", "forest"],
  },
};
