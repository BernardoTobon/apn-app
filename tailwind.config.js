/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        'dark-green' : '#26A839',
        'fluorescent-green' : '#77D939',
        'tea-green' : '#C6F19B',
        'light-green' : '#E9F0D2',
        'light-brown' : '#B18E62',
      },
      width:{
        '40-r' : '40rem',
        '35-r' : '30rem'
      },
      height:{
        '40-r' : '40rem',
        '35-r' : '30rem'
      },
      boxShadow:{
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      },
      fontFamily:{
        'russo-one' : ['russo-one'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
  
}

