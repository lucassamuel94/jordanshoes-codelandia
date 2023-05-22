/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#F9F9F9',
        200: '#EBE9EA',
      },
      black: '#181818',
      gray: '#474747',
    },
    extend: {
      fontFamily: {
        sans: "'Montserrat', sans-serif",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '24px',
          md: '32px',
          lg: '48px',
          xl: '64px',
          '2xl': '100px',
        },
        screens: {
          '2xl': '1719px',
        },
      },
      backgroundImage: {
        hero: 'url("/wallpaper.jpeg")',
      },
    },
  },
  plugins: [],
}
