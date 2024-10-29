/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.js"

  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'greyPlusPlus': 'hsl(234, 29%, 20%)',
      'greyPlus': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      'white': 'hsl(0, 0%, 100%)',
      'rouge': 'hsl(4, 100%, 67%)'
    },
    extend: {},
  },
  plugins: [],
}