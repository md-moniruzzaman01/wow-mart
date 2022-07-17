/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#fcb941",

          "secondary": "#202020",

          "accent": "#c96",

          "neutral": "#D8D6D6",

          "base-100": "#2A303C",

          "info": "#777777",
          "success": "#E5E4E2",

          "warning": "rgb(51 65 85)",

          "error": "#F87272",
        },
      },
      {
        light: {

          "primary": "#fcb941",

          "secondary": "#2A303C",

          "accent": "#1FB2A6",

          "neutral": "#191D24",

          "base-100": "#ffffff",

          "info": "#D3D3D3",
          

          "success": "#E5E4E2",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
