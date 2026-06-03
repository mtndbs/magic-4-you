/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0F1014",
        gold: "#EAC282", // Based on the copper/gold from image
        muted: "#8B8C90",
      },
      fontFamily: {
        sans: ["Heebo", "Tailwind", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
