/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dodgeroll-gold': '#f79f1a',
        'apple-green': '#046e1b',
        'dire-wolf': '#292727'
      }
    },
    fontFamily: {
      Montserrat: "Montserrat', sans-serif"
    },
    container: {
      center: true,
      padding: '2rem'
    },
  },
  plugins: []
}
