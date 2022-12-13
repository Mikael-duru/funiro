/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xxl": "1440px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        darkGray: "#3A3A3A",
        grayThree: "#898989"
      },
    },
  },
  plugins: [],
}
