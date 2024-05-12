/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      backgroundImage: {
        assignment: "url('src/assets/assignmentBanner.png')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
