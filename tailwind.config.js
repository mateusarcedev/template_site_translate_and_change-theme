/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#1F2023',
        },
        roxo: {
          500: "#6244B2",
        }
      }
    },
  },
  plugins: [],
}

