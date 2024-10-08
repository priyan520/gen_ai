/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lgest_for_header': '1800px',
        'smest': '320px',
        '2xsm': '375px',    // For screens 375px and up
        'xsm': '425px',   // For screens 425px and up
      },
    },
  },
  plugins: [],
}