/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#fcb941",

          "secondary": "#333333",

          "accent": "#c96",

          "neutral": "rgb(71 85 105)",

          "base-100": "#ffffff",

          "info": "#777777",

          "success": "rgb(38 38 38)",

          "warning": "rgb(51 65 85)",

          "error": "#F87272",
        },
      },
      {
        dark: {
        
"primary": "#6419E6",
        
"secondary": "#D926A9",
        
"accent": "#1FB2A6",
        
"neutral": "#191D24",
        
"base-100": "#2A303C",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
