/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
        'open-sans' : ["Open Sans", 'sans-serif'],
        'poppins' :["Poppins", 'sans-serif'],
        'jockey-one': ['Jockey One', 'sans-serif'], // Added Jockey One font
      },
    },
  },
  plugins: [],
}

