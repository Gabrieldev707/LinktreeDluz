/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dluz: {
          offwhite: '#F4EFE6',
          bege: '#E5DBC7',
          bege2: '#D9CDB8',
          preto: '#0F0E0D',
          cinza: '#4A463F',
          cinza2: '#8E8578',
          dourado: '#B89968',
          douradoClaro: '#D4B98A',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
