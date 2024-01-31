/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{.js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "320px", max: "424px" },
      sm: { min: "425px", max: "767px" },
      md: { min: "768px", max: "975px" },
      lg: { min: "976px", max: "1439px" },
      xl: { min: "1440px", max: "1919px" },
      xxl: "1920px",
    },
    extend: {
      colors: {
        button: "var(--button)",
        text: "var(--text)",
        backgroud: "var(--background)",
        accent: "var(--accent)",
        white: "var(--white)",
        black: "var(--black)",
        dark_gray: "var(--dark_gray)",
        gray: "var(--gray)",
        light_gray: "var(--light_gray)",
        errors: "var(--errors)",
        white_50: "var(--white_50)",
        white_to_black: "var(--white_to_black)",
      },
      backgroundImage: {
        arrow: "url('@/assets/images/icons/arrow.svg')",
        search: "url('@/assets/images/icons/search.svg')",
      },
    },
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
    variants: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child-p", "& > p");
      addVariant("child-image", "& > p > img");
      addVariant("child-h3", "& > pre");
      addVariant("child-ul", "& > ul");
      addVariant("child-h1", "& > h1");
      addVariant("child-h4", "& > h4");
      addVariant("child-div", "& > div");
    },
  ],
};
