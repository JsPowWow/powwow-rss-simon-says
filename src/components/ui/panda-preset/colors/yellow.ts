import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fdfdf9' },
    '2': { value: '#fefce9' },
    '3': { value: '#fffab8' },
    '4': { value: '#fff394' },
    '5': { value: '#ffe770' },
    '6': { value: '#f3d768' },
    '7': { value: '#e4c767' },
    '8': { value: '#d5ae39' },
    '9': { value: '#ffe629' },
    '10': { value: '#ffdc00' },
    '11': { value: '#9e6c00' },
    '12': { value: '#473b1f' },
    a1: { value: '#aaaa0006' },
    a2: { value: '#f4dd0016' },
    a3: { value: '#ffee0047' },
    a4: { value: '#ffe3016b' },
    a5: { value: '#ffd5008f' },
    a6: { value: '#ebbc0097' },
    a7: { value: '#d2a10098' },
    a8: { value: '#c99700c6' },
    a9: { value: '#ffe100d6' },
    a10: { value: '#ffdc00' },
    a11: { value: '#9e6c00' },
    a12: { value: '#2e2000e0' },
  },
  dark: {
    '1': { value: '#14120b' },
    '2': { value: '#1b180f' },
    '3': { value: '#2d2305' },
    '4': { value: '#362b00' },
    '5': { value: '#433500' },
    '6': { value: '#524202' },
    '7': { value: '#665417' },
    '8': { value: '#836a21' },
    '9': { value: '#ffe629' },
    '10': { value: '#ffff57' },
    '11': { value: '#f5e147' },
    '12': { value: '#f6eeb4' },
    a1: { value: '#d1510004' },
    a2: { value: '#f9b4000b' },
    a3: { value: '#ffaa001e' },
    a4: { value: '#fdb70028' },
    a5: { value: '#febb0036' },
    a6: { value: '#fec40046' },
    a7: { value: '#fdcb225c' },
    a8: { value: '#fdca327b' },
    a9: { value: '#ffe629' },
    a10: { value: '#ffff57' },
    a11: { value: '#fee949f5' },
    a12: { value: '#fef6baf6' },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.yellow.light.1}', _dark: '{colors.yellow.dark.1}' } },
  '2': { value: { _light: '{colors.yellow.light.2}', _dark: '{colors.yellow.dark.2}' } },
  '3': { value: { _light: '{colors.yellow.light.3}', _dark: '{colors.yellow.dark.3}' } },
  '4': { value: { _light: '{colors.yellow.light.4}', _dark: '{colors.yellow.dark.4}' } },
  '5': { value: { _light: '{colors.yellow.light.5}', _dark: '{colors.yellow.dark.5}' } },
  '6': { value: { _light: '{colors.yellow.light.6}', _dark: '{colors.yellow.dark.6}' } },
  '7': { value: { _light: '{colors.yellow.light.7}', _dark: '{colors.yellow.dark.7}' } },
  '8': { value: { _light: '{colors.yellow.light.8}', _dark: '{colors.yellow.dark.8}' } },
  '9': { value: { _light: '{colors.yellow.light.9}', _dark: '{colors.yellow.dark.9}' } },
  '10': { value: { _light: '{colors.yellow.light.10}', _dark: '{colors.yellow.dark.10}' } },
  '11': { value: { _light: '{colors.yellow.light.11}', _dark: '{colors.yellow.dark.11}' } },
  '12': { value: { _light: '{colors.yellow.light.12}', _dark: '{colors.yellow.dark.12}' } },
  a1: { value: { _light: '{colors.yellow.light.a1}', _dark: '{colors.yellow.dark.a1}' } },
  a2: { value: { _light: '{colors.yellow.light.a2}', _dark: '{colors.yellow.dark.a2}' } },
  a3: { value: { _light: '{colors.yellow.light.a3}', _dark: '{colors.yellow.dark.a3}' } },
  a4: { value: { _light: '{colors.yellow.light.a4}', _dark: '{colors.yellow.dark.a4}' } },
  a5: { value: { _light: '{colors.yellow.light.a5}', _dark: '{colors.yellow.dark.a5}' } },
  a6: { value: { _light: '{colors.yellow.light.a6}', _dark: '{colors.yellow.dark.a6}' } },
  a7: { value: { _light: '{colors.yellow.light.a7}', _dark: '{colors.yellow.dark.a7}' } },
  a8: { value: { _light: '{colors.yellow.light.a8}', _dark: '{colors.yellow.dark.a8}' } },
  a9: { value: { _light: '{colors.yellow.light.a9}', _dark: '{colors.yellow.dark.a9}' } },
  a10: { value: { _light: '{colors.yellow.light.a10}', _dark: '{colors.yellow.dark.a10}' } },
  a11: { value: { _light: '{colors.yellow.light.a11}', _dark: '{colors.yellow.dark.a11}' } },
  a12: { value: { _light: '{colors.yellow.light.a12}', _dark: '{colors.yellow.dark.a12}' } },
  default: { value: { _light: '{colors.yellow.light.9}', _dark: '{colors.yellow.dark.9}' } },
  emphasized: { value: { _light: '{colors.yellow.light.10}', _dark: '{colors.yellow.dark.10}' } },
  fg: { value: { _light: '{colors.gray.light.12}', _dark: '{colors.gray.light.12}' } },
  text: { value: { _light: '{colors.yellow.light.a11}', _dark: '{colors.yellow.dark.a11}' } },
});

export default {
  name: 'yellow',
  tokens,
  semanticTokens,
};