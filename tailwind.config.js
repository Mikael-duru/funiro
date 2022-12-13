/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xxl": "1440px"
    },
    extend: {
      colors: {
        primary: "#E89F71",
        gray: "#D8D8D8",
        lightGray: "#616161",
        midGray: "#828282",
        darkGray: "#3A3A3A",
        lightBg: "#F4F5F7",
        grayThree: "#898989"
      },
      spacing: {
        "2.1": "0.625rem",
        "2.2": "0.6875rem",
        "3.1": "0.8125rem",
        "3.2": "0.875rem",
        "3.3": "0.9343rem",
      },
      width: {
        contact: "249px",sssssssssssssssssssssssssssssssssssssssssssss
        form: "256.09px",
        formButton: "48.68px",
        "1.5/12": "10%"
      }
    },
  },
  plugins: [],
}
