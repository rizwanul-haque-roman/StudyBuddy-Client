/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter: '"Inter", sans-serif'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["ligth"],
  },
};
