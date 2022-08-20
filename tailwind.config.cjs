/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem',
      }
    },
  },
  plugins: [
    require
    ('@tailwindcss/forms'),
  ],
}
