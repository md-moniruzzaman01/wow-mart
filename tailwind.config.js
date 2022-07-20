/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   daisyui: {
//     themes: [
//       {
//         dark: {

//           "primary": "#fcb941",

//           "secondary": "#202020",

//           "accent": "#353c4a",

//           "neutral": "#D8D6D6",

//           "base-100": "#2A303C",

//           "info": "#777777",
//           "success": "#E5E4E2",

//           "warning": "#e1e1e6",

//           "error": "#F87272",
//         },
//       },
//       {
//         light: {

//           "primary": "#fcb941",

//           "secondary": "#2A303C",

//           "accent": "rgb(249 250 251)",

//           "neutral": "#191D24",

//           "base-100": "#ffffff",

//           "info": "#D3D3D3",
          

//           "success": "#E5E4E2",

//           "warning": "#0c0c0d",

//           "error": "#F87272",
//         },
//       },

//     ],
//   },
//   plugins: [require("daisyui")],
// }


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}