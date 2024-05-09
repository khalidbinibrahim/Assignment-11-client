/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        bebasNeue: "'Bebas Neue', sans-serif",
        workSans: "'Work Sans', sans-serif",
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

