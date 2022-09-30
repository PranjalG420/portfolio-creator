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
            animation: {
                navLoad: "navLoad 0.75s ease-in-out",
                spin: "spin 20s linear infinite",
            },
            keyframes: {
                navLoad: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0%)" },
                },
            },
        },
    },
    plugins: [],
};
