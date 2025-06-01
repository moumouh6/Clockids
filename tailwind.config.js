/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF3FF',
          100: '#D6E7FF',
          200: '#ADC9FF',
          300: '#85ABFF',
          400: '#5C8DFF',
          500: '#3B7BEA', // Main primary color
          600: '#2E62BB',
          700: '#224A8C',
          800: '#17315D',
          900: '#0B192F',
        },
        secondary: {
          50: '#F4EAFA',
          100: '#E9D5F5',
          200: '#D4ABEB',
          300: '#BE81E0',
          400: '#A957D6',
          500: '#8E44AD', // Main secondary color
          600: '#72368A',
          700: '#552968',
          800: '#391C45',
          900: '#1C0E23',
        },
        accent: {
          50: '#FEF9E6',
          100: '#FDF3CD',
          200: '#FAE69B',
          300: '#F8D969',
          400: '#F5CD37',
          500: '#F1C40F', // Main accent color
          600: '#C19D0C',
          700: '#917609',
          800: '#614E06',
          900: '#302703',
        },
        success: {
          500: '#27AE60',
        },
        warning: {
          500: '#E67E22',
        },
        error: {
          500: '#E74C3C',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};