/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        gray: {
          300: "#F5F5F5",
          800: "#A098AE",
        },
        primary: "#F8B602",
        secondary: "#EB5757",
      },
    },
  },
  plugins: [],
};
