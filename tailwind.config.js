/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sage-canvas': '#d3e4df',
        'pure-white': '#ffffff',
        'carbon': '#0d1212',
        'graphite': '#34484a',
        'slate': '#565959',
        'mist': '#7b8889',
        'vivid-teal': '#64d5b3',
        'teal-hover': '#4fc7a4',
        'forest-dark': '#253536',
        // Dark mode supporting
        'dark-canvas': '#0c1415',
        'dark-card': '#141e20',
        'dark-border': '#213033',
        'dark-surface': '#1b2729',
        'dark-text': '#eef5f3',
        'dark-muted': '#8a9b9d',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        '36': '36px',
        'card': '36px',
        'pill': '16px',
        'btn': '12px',
      },
      letterSpacing: {
        'eyebrow': '0.18em',
        'micro': '0.08em',
      },
      boxShadow: {
        'subtle-hover': '0 20px 40px -15px rgba(13, 18, 18, 0.07)',
      }
    },
  },
  plugins: [],
}
