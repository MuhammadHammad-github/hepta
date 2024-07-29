/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "abril-fatface": ['"Abril Fatface"', "serif"],
        "mukta-mahee": ['"Mukta Mahee"', "sans-serif"],
        merriweather: ['"Merriweather"', "serif"],
      },
      screens: {
        "960px": "960px",
        xs: "450px",
      },
    },
  },
  plugins: [],
};
