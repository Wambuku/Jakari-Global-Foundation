/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1F2937',
        },
        gold: '#FFD700',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
