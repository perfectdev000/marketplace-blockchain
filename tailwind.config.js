const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        red:{
          DEFAULT: '#ff0000',
        },
        blue: {
          DEFAULT: '#556EE6',
        },
        purple: {
          DEFAULT: '#6B21A8',
        },        
      },
      width:{
        '300':'300px',
        '400':'400px',
      }
    },
    bottom: {
      0: 0,
      75: '75px',
    },
    fontSize: {
      8: ['8px', '14px'],
      xs: ['10px', '18px'],
      12: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      18: ['18px', '26px'],
      lg: ['20px', '28px'],
      22: ['22px', '34px'],
      xl: ['24px', '36px'],
      28: ['28px', '36px'],
      32: ['32px', '40px'],
      36: ['36px', '52px'],
      40: ['40px', '50px'],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  variants: {
    extend: {},
    fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
}
