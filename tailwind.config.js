/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'hero-1': 'url("/images/hero/hero-1.webp")', 
        'hero-2': 'url("/images/hero/hero-2.webp")',
        'hero-3': 'url("/images/hero/hero-3.webp")',
        'cadenas': 'url("/images/homeImages/cadenas.webp")',
        'earings': 'url("/images/homeImages/earings.webp")',
        'about-us-1': 'url("/images/aboutUs/about-us-1.webp")',
        'about-us-2': 'url("/images/aboutUs/about-us-2.webp")',
        'about-us-phone': 'url("/images/aboutUs/about-us-phone.webp")',
      },
      height:{
        '26rem' : '26rem',
        'hero-lg': 'calc(100svh - 96px)',
        'screen-50': 'calc(100svh - 50svh)'
      },
      gridTemplateRows: {
        'form-lg': '60px 40px 250px 40px 90px 100px 190px 40px',
        'form-xs': '100px 40px 40px 220px 240px 40px 90px 130px 220px 40px '
      }
    },
  },
  plugins: [],
}