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
        gtek: ['gtek'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
  
    },
  },
  plugins: [],
}

