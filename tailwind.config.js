/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.theme.ts"
  ],
  theme: {
    extend: {
      container: {center:true},
      boxShadow: {
        'full': '0 0px 20px 0px',
        //shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        eggplant: {
          50: "#b7b7c9",
          100: "#8b8ca8",
          200: "#636484",
          500: "#615878",
          600: "#534C6C",
          700: "#5A5973",
          800: "#373555",
          900: "#313050",
          950: "#1D1D30",
        }
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
      )
    }),
  ],
}