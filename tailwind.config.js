/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: '#778192',
        DEFAULT: '#25262D',
      },
      secondary: '#EDF2F7',
      grey: '#778192',
      cream: '#E5E5E5',
      white: '#FFFFFF'
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}