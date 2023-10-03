/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
      },
      colors: {
        light: "#F3F3F3",
        ash: '#E7E7E7',
        gray: "#706F6F",
        "light-gray": "#9F9F9F",
        dark: "#403F3F",
        red: "#D82D7E",
        "light-red": "#D72050",
        yellow: "#FF8C47",
        orange: "#F75B5F",
        blue: "#3B599C",
        "light-blue": "#58A7DE",
        violet: "#05001D",
      },
    },
  },
  plugins: [require("daisyui")],
};
