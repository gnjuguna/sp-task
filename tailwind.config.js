const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
        '3xs': '.50rem',
        '4xs': '.40rem'
      },
      colors: {
        'sp-green': '#39cb74',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')
  ],
};
