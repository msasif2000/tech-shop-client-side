/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
  theme: {
    fontFamily: {
      'raleway' : ['Raleway', 'sans-serif'],
      'rancho' : ['Rancho', 'cursive']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  
}

