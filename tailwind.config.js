module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
    },
    extend: {
      height: {
        "60vh": "60vh", // homepage-section-2
      },
      spacing: {
        "30vh": "30vh", // homepage-bg
        "20vh": "20vh", // homepage-mask
      },
    },
  },
  plugins: [],
};
