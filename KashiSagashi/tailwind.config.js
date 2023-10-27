/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#687eff",
      },
      width: {
        128: "32rem",
        "40vw": "40vw",
      },
    },
  },
  plugins: [],
};
