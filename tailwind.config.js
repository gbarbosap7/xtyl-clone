/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-display': ['Clash Display', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        'xtyl-black': '#0F172A',
        'xtyl-primary': '#40E0D0',
        'xtyl-white': '#FFFFFF',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'spotlight': {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -72%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 2s ease infinite',
        'spotlight': 'spotlight 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
} 