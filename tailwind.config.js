/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#545DFF",
        secondary: "#FCFCFF",
        tertiary: "#FFF",
        profile: "#F3F4FF"
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#545DFF",
      secondary: "#7A7A7A",
      tertiary: "#F3F4FF",
      contrast: "#FFF"
    },
    fontFamily: {
      primary: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};
