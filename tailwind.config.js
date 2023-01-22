module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        124: "124px",
        450: "450px",
        20: "20px",
      },
      boxShadow: {
        "3xl":
          "0px 0px 100px 47px rgb(0 0 0 / 0.1), 4px 2px 4px -2px rgb(0 0 0 / 0.1);",
      },
      colors: {
        blue: "blue",
        purple: "#6b46c1",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",

        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
    },
  },
  loader: "css-loader",
  options: {
    modules: true,
    importLoaders: 1,
    sourceMap: true,
  },
  plugins: [],
};
