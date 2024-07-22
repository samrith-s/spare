/* eslint-disable @typescript-eslint/no-var-requires */
let COLOR_MAPPING;

try {
  COLOR_MAPPING = require('./theme/index.js').COLOR_MAPPING;
} catch (e) {
  console.error(e);
  COLOR_MAPPING = {};
}

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
