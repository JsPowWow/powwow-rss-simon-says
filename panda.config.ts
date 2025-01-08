import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@/components/ui/panda-preset';

import amber from '@/components/ui/panda-preset/colors/amber';
import sand from '@/components/ui/panda-preset/colors/sand';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  presets: [createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' })],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  importMap: '@/styled-system',

  jsxFramework: 'react',
});
