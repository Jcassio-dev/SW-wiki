/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': {'min': '280px'},

      'tablet': {'min': '768px'},

      'desktop': {'min': '1024px'},

    },
    extend: {},
  },
  plugins: [],
}

