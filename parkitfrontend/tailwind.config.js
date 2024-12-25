/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}',
//     './public/index.html',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
