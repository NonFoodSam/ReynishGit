/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: "475px",
      sm: '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 80s linear infinite",
        "blob": "blob 7s infinite", // Adding the blob animation
        tilt: 'tilt 10s infinite linear', // Adding the tilt animation
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "blob": {  // Defining the blob keyframes
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)", // Corrected the typo in translate
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.75deg)',
          },
          '75%': {
            transform: 'rotate(-0.75deg)',
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
