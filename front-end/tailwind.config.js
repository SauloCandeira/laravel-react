/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {

    fontSize: {
      xss: 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      blue: '#2563EB',
      back: '#f1f1ef',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan:{
        500: '#81d8f7',
        300: '#9be1fb'
      },

      orange: {
        100: '#ff3700',
        75: '#fb6340',
        50: '#ff9109'
      }, 

      green: {
        50: '#2dce89'
      }
      


    },
    extend: {
      isolation: ["hover"]
    },
  },
  plugins: [],
}
