/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        roboto : ['Roboto', 'sans-serif'],
      },
      textColor : {
        "headingColor" : "#11218B",
        "textColor" : "#4B5563",
        "iconColor" : "#1e88e5",
      },
      backgroundColor : {
        "buttonBg" : "#11218B",
        "buttonBgHover" : "#1A2BB8"
      }
    },
  },
  plugins: [],
};
