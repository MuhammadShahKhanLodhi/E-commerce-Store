/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5C2B9",
        secondary: "#ab9061"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      },
      screens: {
        xl: "1278px",
        lg: "1024px",
        md: "860px",
        sm: "740px",
        xs: "610px"
      }
    },
  },
  plugins: [],
}