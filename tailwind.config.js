/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fdfdfd',
          gradient: {
            start: '#f8fafc',
            end: '#eef2ff',
          }
        },
        accent: {
          indigo: '#6366f1',
          pastel: '#e0e7ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      }
    },
  },
  plugins: [],
}
