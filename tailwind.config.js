/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spinY: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        load: 'spinY 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
