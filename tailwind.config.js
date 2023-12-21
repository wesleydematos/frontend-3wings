/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT:'#1f6baf',
          hover: '#3f80ba',
          light: '#7faad1'
        },
        secondary: {
          DEFAULT: '#1f9abf',
          hover: '#3fa8c8',
          light: '#7fc5da'
        },
        tertiary: {
          DEFAULT:'#1f9186',
          hover: '#3fa097',
          light: '#7fc0ba'
        },
        accent: {
          DEFAULT: '#ed1d24',
          hover: '#dd242a',
        },
        body: '#ffffff',
        tx: '#3E5363'
      }
    },
  },
  plugins: [],
}