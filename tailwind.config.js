/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "1.6": "1.6rem"
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'hero-1': 'url("/hero-1.webp")', 
        'hero-2': 'url("/hero-2.webp")',
        'hero-3': 'url("/hero-3.webp")'
      },
      height:{
        '26rem' : '26rem'
      }
    },
  },
  plugins: [],
}