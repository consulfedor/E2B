const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,css}', './pages/**/*.{js,ts,jsx,tsx,css}', './styles/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-jet-brains)', ...fontFamily.mono],
      },
      spacing: {
        120: '30rem',
      },
      height: { inherit: 'inherit' },
      colors: {
        green: {
          400: '#E9F5E6',
          800: '#20BC69',
        },
      },
    },
  },
}
