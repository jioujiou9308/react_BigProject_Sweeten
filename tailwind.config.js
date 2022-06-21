const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {},
    colors: {
      white: "#FCFBFB",
      primary: "#F8CDCE",
      secondary: "#F39898",
      warning: "#F27A68",
      sub: "#FAD2BC",
      light: "#FCE0CC",
      dark: "#765544",
      test: "#A9A9A9",
      aside: "#FFCB9B",
      black: "#000000",
      line: "#DDD0B7",
    },
    extend: {
      fontFamily: {
        "press-start": ["Noto Sans TC", "sans-serif"],
      },
      height: {
        "60vh": "60vh", // homepage-section-2
      },
      spacing: {
        "30vh": "30vh", // homepage-bg
        "20vh": "20vh", // homepage-mask
      },
      // keyframes: {
      //   headerOpen: {
      //     "0%": { height: "5rem" },
      //     "100%": { height: "13rem" },
      //   },
      //   headerClose: {
      //     "0%": { height: "13rem" },
      //     "100%": { height: "5rem" },
      //   },
      // },
      // animation: {
      //   headerOpen: "headerOpen 1s ease-in-out forwards",
      //   headerClose: "headerClose 1s  ease-in-out forwards",
      // },
    },
  },
  plugins: [],
});
