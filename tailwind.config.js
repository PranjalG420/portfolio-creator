/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "910px",
      md: "768px",
      sm: "640px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
        serif: ["Roboto Condensed", "serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      animation: {
        spin: "spin 100s linear infinite",
      },
    },
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
