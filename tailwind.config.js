/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      appBackgroundColor: "#339650",
      editorPreviewColor: "#9fd69f",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
