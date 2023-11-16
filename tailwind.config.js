/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        mid: '80%',
        large: '90%'
      },
      colors: {
        primary: '#FF2625',
      },
      backgroundColor: {
        main: '#FFFAFB',
      },
    },
  },
  plugins: [],
}

