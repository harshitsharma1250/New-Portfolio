/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens : {
        'tnd' : '1000px',
      }
    },
  },
  plugins: [],
};
