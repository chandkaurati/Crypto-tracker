/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
         'hero-pattern' : "url('https://assets-global.website-files.com/62ea94aa50fb59ad3ea476f0/62ead55139e1cec1d88f4986_image-hero-v1-cryptocurrency-template-p-1600.webp')"
      }
    },
    screens:{
      'md' : '800px',
      'sm' : '640px'
    },
  },
  plugins: [],
}

