/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: { files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], extract },
  theme: {
    screens,
    fontSize: {
      'fluid': 'clamp(14px, 2vw, 19px)',
    },
    extend: {
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        heading: ["'Ogg Text TRIAL'", "serif"],
        "dm-sans": ['"DM sans"', "sans-serif"],
      },
      colors: {
        "orenda-purple": "#2E0086",
        "orenda-green": "#127801",
      },
    },
  },
  plugins: [fluid],
};
