/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DEDBC8",
      },
      fontFamily: {
        heading: ['"Instrument Serif"', 'serif'],
        body: ['"Barlow"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '9999px',
      },
    },
  },
  plugins: [],
}
