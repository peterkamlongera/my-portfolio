// /** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      display: ["Barlow"],
      body: ["Raleway"]
    },
    gridTemplateRows: {
      pancake: "auto 1fr auto"
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'color-1': '#00408A',
      'color-2': '#06203D',
      'color-3': '#8A180E',
      'color-4': '#778A0E',
      'color-5': '#353D03',
    },
    fontSize: {
      'ms': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    backgroundImage: {
      'pattern-1': "url('../assets/svg/confetti-doodles.svg')"
    },
    extend: {
  plugins: [],
  }
}
}
