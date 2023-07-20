/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "#F2F2F2",
        darkGray: "#4B6A9B",
        midGray: "#F6F8FF",
        lightGray: "#697C9A",
        black: "#222731",
        midBlack: "#2B3442",
        blue: "#0079FF",
        background: "#141D2F",
        darkBlue: "#1E2A47",
        lightBlue: "#60ABFF",
        grayBlue: "#90A4D4",
        red: "#F74646",
      },
    },
  },
  plugins: [],
}
