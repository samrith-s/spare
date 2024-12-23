/* eslint-disable @typescript-eslint/no-var-requires */
let COLOR_MAPPING;

try {
  COLOR_MAPPING = require('./src/theme/index.js').COLOR_MAPPING;
} catch (e) {
  console.error(e);
  COLOR_MAPPING = {};
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: COLOR_MAPPING,
    },
  },
  plugins: [],
};
