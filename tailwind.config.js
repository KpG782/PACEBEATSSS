/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [ require("nativewind/preset") ],
  theme: {
    extend: {
      colors: {
        primary: {
          10:  "#F2F7FF",
          20:  "#E5F0FF",
          30:  "#C2D6FF",
          40:  "#75B8FF",
          50:  "#30A8FF",
          60:  "#0A69FA",
          70:  "#0050C7",
          80:  "#003094",
          90:  "#04296E",
          100: "#021026",
          DEFAULT: "#30A8FF",
          dark:    "#1E1E1E",
        },
        grey: {
          10:  "#F4F6F7",
          20:  "#EBEBEB",
          30:  "#DAD0DC",
          40:  "#C1C4C6",
          50:  "#898DBF",
          55:  "#7B7B7B",
          60:  "#6E7375",
          70:  "#53575A",
          80:  "#2F3133",
          90:  "#1F2224",
          100: "#131214",
        },
        accent: {
          subtle:   "#E5F0FF",
          muted:    "#C2D6FF",
          dim:      "#75B8FF",
          moderate: "#0A69FA",
          bold:     "#0050C7",
          strong:   "#003094",
          intense:  "#04296E",
        },
        secondary: "#3F4ED3",
        light:     { 100: "#D6C6FF", 200: "#A8B5DB", 300: "#9CA4AB" },
        dark:      { 100: "#221f3d", 200: "#0f0d23" },
        'font-primary': { DEFAULT: "#000000", dark: "#FFFFFF" },

        // 🚨 new error color
        error: "#DB340B",
      },
      fontFamily: {
        primary:           ['PlusJakartaSans', 'sans-serif'],
        'primary-medium':  ['PlusJakartaSans-Medium', 'sans-serif'],
        'primary-semibold':['PlusJakartaSans-SemiBold', 'sans-serif'],
        'primary-bold':    ['PlusJakartaSans-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
