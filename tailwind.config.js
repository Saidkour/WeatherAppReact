/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // custom colors
      primary: "#005B60",
      secondary: "#00ADAD",
      "semi-black": "#303030",
      "semi-gray": "#5E5E5E",
      "semi-white": "#C6C6C6",
    }
  },
  plugins: [],
}

