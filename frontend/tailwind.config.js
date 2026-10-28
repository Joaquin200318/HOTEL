/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          dark: '#0F172A',
          gold: '#D97706',
          goldLight: '#F59E0B',
          sand: '#F8FAFC',
        }
      }
    },
  },
  plugins: [],
};