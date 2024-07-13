/* eslint-disable @typescript-eslint/no-var-requires */
const { COLOR_MAPPING } = require('./theme/index.js');

console.log(COLOR_MAPPING);

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './utilities/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: COLOR_MAPPING,
    },
  },
  plugins: [],
};
