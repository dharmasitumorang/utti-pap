/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        title: ['DM Sans', 'sans-serif'],
        text: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

