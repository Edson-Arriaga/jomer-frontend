/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontSize: {
      //   "1.6": "1.6rem"
      // },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'hero-1': 'url("/images/hero/hero-1.webp")', 
        'hero-2': 'url("/images/hero/hero-2.webp")',
        'hero-3': 'url("/images/hero/hero-3.webp")',
        'cadenas': 'url("/images/homeImages/cadenas.webp")',
        'aretes': 'url("/images/homeImages/aretes.webp")',
        'nosotros-1': 'url("/nosotros1.jpeg")'
      },
      height:{
        '26rem' : '26rem',
        'hero-lg': 'calc(100svh - 96px)'
      }
    },
  },
  plugins: [],
}