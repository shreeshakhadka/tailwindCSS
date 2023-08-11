/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  safelist:[{
    pattern: /bg-(yellow|green|blue)/
  }
  ],
  
  plugins: [require("daisyui")],
}

