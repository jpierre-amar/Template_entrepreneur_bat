/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          dark: '#152a47',
          light: '#2d4f7a',
        },
        secondary: {
          DEFAULT: '#d4af37',
          dark: '#b8941f',
          light: '#e5c866',
        },
        accent: {
          DEFAULT: '#8b7355',
          light: '#a68b6f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

