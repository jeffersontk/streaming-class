/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blurBackground.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        green: {
          300: "#015F43",
          500: "#00875F",
          700: "#00B37E",
        },
        blue: {
          500: "#81D8F7",
          700: "#2b3656",
          800: "#222b45",
          900: "#1b2237",
        },
        purple: {
          500: "#5865f2",
          700: "#323fba"
        },
        orange: {
          500: "#FBA94C"
        },
        red: {
          500: "#f75a68"
        },
        gray: {
          100: "#e1e1e6",
          200: "#c4c4cc",
          300: "#8d8d99",
          500: "#323238",
          600: "#29292e",
          700: "#121214",
          900: "#09090a",
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
