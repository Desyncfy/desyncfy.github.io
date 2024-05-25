/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./blog/**/*.{html,js}","**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu'],
        'inter': ['inter'],
        'jetbrains': ['Jetbrains Mono'],
      },
      colors: {
        'element': '#569CD6',
        'arg': '#9CDCFE',
        'string': '#CE9178',
        'greaterless': '#808080',
        'brackets': '#F8D704',
      }
    },
  },
  plugins: [],
}
