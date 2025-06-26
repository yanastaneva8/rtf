/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#DDE8D3",
        forest: "#0B3D20",
        rose: "#CFA7A7",
        mint: "#BEE3C4",
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['Garamond', 'serif'],
      },
    },
  },
  plugins: [require("daisyui"),
        require("preline"), 
  ],
};
