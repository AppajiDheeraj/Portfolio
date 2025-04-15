/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        whitenice: ['Whitenice'], // <-- your custom font
        avant1: ['avant1'],
        avant2: ['avant2'],
        avant3: ['avant3'],
        highrise:['highrise'],
      },
    },
  },
  plugins: [],
}

