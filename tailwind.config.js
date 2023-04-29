/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "light-grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
    },

    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      backgroundImage: {
        "gradient-dark-blue":
          "linear-gradient(to bottom, hsl(215, 20%, 17%) 0%, hsl(225, 19%, 12%) 100%)",
      },
    },
  },
  plugins: [],
};
