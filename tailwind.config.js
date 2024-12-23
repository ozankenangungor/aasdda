/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'], // src içindeki tüm dosyaları kapsar
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
