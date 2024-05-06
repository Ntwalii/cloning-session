/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],      
  },
    extend: {
      colors:{
        goldOrange:"FF5800"
      }
    },
  },
  plugins: [],
}

