/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        tech: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        'gold-dim': '#8a7020',
        'neon-green': '#00FF41',
        'neon-green-dark': '#00a827',
        black: '#050505',
        'dark-gray': '#0a0a0a',
      },
      animation: {
        'scroll-wheel': 'scrollWheel 2s infinite',
        'pulse-orbs': 'pulseOrbs 4s infinite alternate',
      },
    },
  },
  plugins: [],
};
