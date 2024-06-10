/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        heading: ["'Ogg Text TRIAL'", 'serif'],
        'dm-sans': ['"DM sans"', 'sans-serif']
      },
      colors: {
        'orenda-purple': '#2E0086',
        'orenda-green': '#127801',
      },
    },
  },
  plugins: [],
}
