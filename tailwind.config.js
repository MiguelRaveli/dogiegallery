/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxSizing: {
        border: "border-box",
        content: "content-box",
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".box-border": { boxSizing: "border-box" },
        ".box-content": { boxSizing: "content-box" },
      });
    },
  ],
};
