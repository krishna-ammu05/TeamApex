/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "tablet":"690px",
    },
    // colors:{
    //   "twitter-blue":"#1DA1F2"
    
    extend: {},
  },
  plugins: [],
}