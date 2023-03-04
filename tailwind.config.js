/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': {'max': '640px'},
      },
      fontFamily: {
        'dancing-font': ['"Dancing Script"'],
      }
    },
  },
  plugins: [],
  utilities: {
    ".nav-item span": {
      transition: "color 0.3s ease",
    },
  },
}
