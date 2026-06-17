/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ye must ho
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#FBBF24",
      },
    },
  },
  plugins: [],
}; 