// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00549b",
                primaryHover: "#0a8fed",
                darkPrimary: "#0a3f70",

                secondary: "#FCB900",
                secondaryHover: "#d19500",

                highLight: "#ffffff",
                light: "#f0f0f2",
                darkLight: "#4c4e59",

                dark: "#2f3238",
                black: "#26292e",

                lightNeutral: "#e2e8f0",
                neutral: "#c1c5cc",
                darkNeutral: "#7f8289",

                textNeutral: "#b8b8b8",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
