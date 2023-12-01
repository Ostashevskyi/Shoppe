/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{.js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        accent: "#A18A68",
        white: "#FFFFFF",
        black: "#000000",
        dark_gray: "#707070",
        gray: "#D8D8D8",
        light_gray: "#EFEFEF",
        errors: "#D82700",
        white_50: "rgba(255,255,255,0.5)",
      },
    },
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
    variants: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
