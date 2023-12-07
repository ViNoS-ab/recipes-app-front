/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "foodRed": "#CB2323",
        "foodYellow": "#F6C851",
        "foodCrevet": "#F38B50",
        "defaultBg": "#F3E7D8"
      }
    },
  },
  plugins: [],
}
