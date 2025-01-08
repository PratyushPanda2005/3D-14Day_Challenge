
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBorder:'#D1D1D6',
        customText: '#999999',
        emojiBg: '#FFF8E5',
        buttonBg: '#414141',
      },
      fontFamily:{
        'rethinkSans' : ["Rethink Sans", "serif"]
      }
    },
  },
  plugins: [],
}

