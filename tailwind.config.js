/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'orbitron': ['Orbitron', 'monospace'],
      'syne': ['Syne', 'sans-serif'],
      'rajdhani': ['Rajdhani', 'sans-serif'],
    },
    colors: {
      'neon': {
        'cyan': '#00ffff',
        'pink': '#ff00ff',
        'blue': '#0080ff',
        'green': '#00ff00',
        'purple': '#8000ff',
      },
      'glass': {
        'bg': 'rgba(255, 255, 255, 0.1)',
        'border': 'rgba(255, 255, 255, 0.2)',
      }
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      'grid-pattern': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
    },
    animation: {
      'glow': 'glow 2s ease-in-out infinite alternate',
      'float': 'float 6s ease-in-out infinite',
      'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'bounce-slow': 'bounce 3s infinite',
    },
    keyframes: {
      glow: {
        '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
        '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      }
    },
    backdropBlur: {
      'xs': '2px',
    }
  },
  plugins: [],
} 