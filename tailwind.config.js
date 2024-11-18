/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Para los archivos HTML
    './src/**/*.{js,ts,jsx,tsx}',
    '.src/assets/components/*{js,ts,jsx,tsx} '// Para los archivos de React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

