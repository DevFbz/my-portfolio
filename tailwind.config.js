/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1F1F23',
          secondary: '#1F1F23',
        },
        purple: {
          neon: '#8B5CF6',
          black:'#1F1F23',
          glow: '#A78BFA',
        },
        indigo: {
          soft: '#6366F1',
        },
        magenta: {
          accent: '#D946EF',
        },
        text: {
          primary: '#EDE9FE',
          secondary: '#C4B5FD',
          muted: '#9CA3AF',
        }
      },
    },
  },
  plugins: [],
}