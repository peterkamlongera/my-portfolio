// /** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./*.html"],
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
    backgroundImage: {
      'pattern-1': "url('../assets/svg/confetti-doodles.svg')"
    },
    extend: {
  plugins: [],
  }
}
}
