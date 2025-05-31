/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'xtyl-black': '#0D0D0D',
        'xtyl-white': '#FFFFFF',
        'xtyl-gray': '#1A1A1A',
      },
      fontFamily: {
        'clash-display': ['Clash Display', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 