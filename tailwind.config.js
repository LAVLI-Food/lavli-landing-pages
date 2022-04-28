const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
    'src/contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      // red: colors.red,
      // yellow: colors.amber,
      // green: colors.emerald,
      // blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,

      brand: {
        base: {
          gray: '#e6ece4',
          sand: '#ece3be',
          black: '#151520',
        },
        red: {
          light: '#eb5e33',
          dark: '#de5243',
        },
        orange: {
          light: '#ffc700',
          dark: '#f7a642',
        },
        green: {
          light: '#afd4ab',
          medium: '#60b156',
          dark: '#4b6b58',
        },
        blue: {
          light: '#5dc9ca',
          dark: '#122b5e',
        },
      },

      'red-10': 'var(--red-10)',
      'red-20': 'var(--red-20)',
      'red-30': 'var(--red-30)',
      'red-40': 'var(--red-40)',
      'red-50': 'var(--red-50)',
      'red-60': 'var(--red-60)',
      'red-70': 'var(--red-70)',
      'red-80': 'var(--red-80)',
      'red-90': 'var(--red-90)',

      'green-10': 'var(--green-10)',
      'green-20': 'var(--green-20)',
      'green-30': 'var(--green-30)',
      'green-40': 'var(--green-40)',
      'green-50': 'var(--green-50)',
      'green-60': 'var(--green-60)',
      'green-70': 'var(--green-70)',
      'green-80': 'var(--green-80)',
      'green-90': 'var(--green-90)',

      'blue-10': 'var(--blue-10)',
      'blue-20': 'var(--blue-20)',
      'blue-30': 'var(--blue-30)',
      'blue-40': 'var(--blue-40)',
      'blue-50': 'var(--blue-50)',
      'blue-60': 'var(--blue-60)',
      'blue-70': 'var(--blue-70)',
      'blue-80': 'var(--blue-80)',
      'blue-90': 'var(--blue-90)',

      'yellow-10': 'var(--yellow-10)',
      'yellow-20': 'var(--yellow-20)',
      'yellow-30': 'var(--yellow-30)',
      'yellow-40': 'var(--yellow-40)',
      'yellow-50': 'var(--yellow-50)',
      'yellow-60': 'var(--yellow-60)',
      'yellow-70': 'var(--yellow-70)',
      'yellow-80': 'var(--yellow-80)',
      'yellow-90': 'var(--yellow-90)',

      // black: 'var(--black)',

      dark: {
        DEFAULT: 'rgba(0, 0, 0, .87)',
        medium: 'rgba(0, 0, 0, .60)',
        disabled: 'rgba(0, 0, 0, .38)',
      },
      light: {
        DEFAULT: 'rgba(255, 255, 255, .87)',
        medium: 'rgba(255, 255, 255, .60)',
        disabled: 'rgba(255, 255, 255, .38)',
      },
      error: '#b00020',
    },
    // fontWeight: { normal: 300, medium: 500, bold: 700 }, // Poppins
    fontWeight: { normal: 400, medium: 400, extrabold: 800 }, // Nexa
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      margin: {
        26: '6.5rem',
      },
      inset: {
        30: '7.5rem',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
