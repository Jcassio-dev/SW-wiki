/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': {'min': '280px'},

      'tablet': {'min': '768px'},

      'desktop': {'min': '1024px'},

    },
    extend: {
      keyframes: {
        left: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        right: {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        bottom:{
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        top:{
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        left: 'left 0.3s ease-in-out',
        bottom: 'bottom 0.3s ease-in-out',
        top: 'top 0.3s ease-in-out',
        right: 'right 0.3s ease-in-out',
      }
    },
  },
  plugins: [],

}

