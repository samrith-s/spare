import { COLOR_MAPPING } from './src/theme';

export default {
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
