/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js}"], // Add your file paths here
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#123456',
        safelist: ['bg-blue-500', 'bg-red-500', 'bg-green-500'],

      },
    },
  },
};
