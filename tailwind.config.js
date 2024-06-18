/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
          'primary': ['Limelight', 'sans-serif'], //font-primary
          'secondary': ['Fascinate', 'sans-serif'], //font-secondary
      },
       colors: {
          'black': '#000000', // text-black bg-black border-black
          'white': '#ffffff', // text-black bg-black border-black
          'blue': "#0047A4", // text-black bg-black border-black
          'light-blue': "#D2E7FB", // text-black bg-black border-black
      },
      boxShadow: {
          'card': '3px 4px 24px 0px rgba(0, 0, 0, 0.10)',
      }
    },
    container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          md: '48px',
          xl: '80px'
        }
    },
    important: true,
  },
  plugins: [
    function ({ addComponents }) {
        addComponents({
            '.container': {
              maxWidth: '100%',
              '@screen xl': {
                maxWidth: '1660px'
              }
            }
          })
    }
  ],
  content: [
    "./src/**/*.{html,js}"
  ],
}
