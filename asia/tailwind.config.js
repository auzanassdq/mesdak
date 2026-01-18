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
        sans: ['var(--font-sansation)', 'var(--font-host-grotesk)', 'system-ui', '-apple-system', 'sans-serif'],
        'host-grotesk': ['var(--font-host-grotesk)', 'system-ui', '-apple-system', 'sans-serif'],
        'sansation': ['var(--font-sansation)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#fad4d4',
          300: '#f6b3b3',
          400: '#f18e8e',
          500: '#BC3126',
          600: '#a92c22',
          700: '#8d251c',
          800: '#711e17',
          900: '#5d1c17',
          950: '#330b09',
          DEFAULT: '#BC3126',
          dark: '#8d251c',
          light: '#f6b3b3',
        },
        secondary: {
          DEFAULT: '#F5A623',
          dark: '#D68C1C',
          light: '#FFBE5C',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}