/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
        animation: {
          'loop-scroll': 'loop-scroll 80s linear infinite',
        },
        keyframes: {
          'loop-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          }
        }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};