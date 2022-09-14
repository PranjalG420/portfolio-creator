/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Kanit", "sans-serif"],
                serif: ["Roboto Condensed", "serif"],
                mono: ["Roboto Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
