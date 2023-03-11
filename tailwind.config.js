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
        'laptop': {'min': '1024px'},
      },
      fontFamily: {
        'dancing-font': ['"Dancing Script"'],
        'tilt-neon': ['"Tilt Neon"'],
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
