/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  safelist: [
    {
      pattern: /bg-purple.*/g,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
