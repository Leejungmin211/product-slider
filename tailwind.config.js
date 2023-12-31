/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      width: {
        60: "60px",
        249: "249px",
        260: "260px",
        1050: "1050px",
        1380: "1380px",
      },
      maxWidth: {
        1900: "1900px",
      },
      height: {
        60: "60px",
        320: "320px",
        370: "370px",
      },
      margin: {
        18: "18px",
        27: "27px",
        590: "590px",
      },
      fontSize: {
        28: "28px",
      },
      colors: {
        softBlack: "#333",
        fontGray: "#b5b5b5",
        lightGray: "#888",
        dddGray: "#ddd",
        accentOrange: "#fa622f",
      },
      scale: {
        102: "1.02",
      },
      animation: {
        moveButtonAnimate: "moveAnimate 0.3s forwards 0s",
      },
      keyframes: {
        moveAnimate: {
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
