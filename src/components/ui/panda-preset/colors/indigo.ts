import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fdfdfe' },
    '2': { value: '#f7f9ff' },
    '3': { value: '#edf2fe' },
    '4': { value: '#e1e9ff' },
    '5': { value: '#d2deff' },
    '6': { value: '#c1d0ff' },
    '7': { value: '#abbdf9' },
    '8': { value: '#8da4ef' },
    '9': { value: '#3e63dd' },
    '10': { value: '#3358d4' },
    '11': { value: '#3a5bc7' },
    '12': { value: '#1f2d5c' },
    a1: { value: '#00008002' },
    a2: { value: '#0040ff08' },
    a3: { value: '#0047f112' },
    a4: { value: '#0044ff1e' },
    a5: { value: '#0044ff2d' },
    a6: { value: '#003eff3e' },
    a7: { value: '#0037ed54' },
    a8: { value: '#0034dc72' },
    a9: { value: '#0031d2c1' },
    a10: { value: '#002ec9cc' },
    a11: { value: '#002bb7c5' },
    a12: { value: '#001046e0' },
  },
  dark: {
    '1': { value: '#11131f' },
    '2': { value: '#141726' },
    '3': { value: '#182449' },
    '4': { value: '#1d2e62' },
    '5': { value: '#253974' },
    '6': { value: '#304384' },
    '7': { value: '#3a4f97' },
    '8': { value: '#435db1' },
    '9': { value: '#3e63dd' },
    '10': { value: '#5472e4' },
    '11': { value: '#9eb1ff' },
    '12': { value: '#d6e1ff' },
    a1: { value: '#1133ff0f' },
    a2: { value: '#3354fa17' },
    a3: { value: '#2f62ff3c' },
    a4: { value: '#3566ff57' },
    a5: { value: '#4171fd6b' },
    a6: { value: '#5178fd7c' },
    a7: { value: '#5a7fff90' },
    a8: { value: '#5b81feac' },
    a9: { value: '#4671ffdb' },
    a10: { value: '#5c7efee3' },
    a11: { value: '#9eb1ff' },
    a12: { value: '#d6e1ff' },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.indigo.light.1}', _dark: '{colors.indigo.dark.1}' } },
  '2': { value: { _light: '{colors.indigo.light.2}', _dark: '{colors.indigo.dark.2}' } },
  '3': { value: { _light: '{colors.indigo.light.3}', _dark: '{colors.indigo.dark.3}' } },
  '4': { value: { _light: '{colors.indigo.light.4}', _dark: '{colors.indigo.dark.4}' } },
  '5': { value: { _light: '{colors.indigo.light.5}', _dark: '{colors.indigo.dark.5}' } },
  '6': { value: { _light: '{colors.indigo.light.6}', _dark: '{colors.indigo.dark.6}' } },
  '7': { value: { _light: '{colors.indigo.light.7}', _dark: '{colors.indigo.dark.7}' } },
  '8': { value: { _light: '{colors.indigo.light.8}', _dark: '{colors.indigo.dark.8}' } },
  '9': { value: { _light: '{colors.indigo.light.9}', _dark: '{colors.indigo.dark.9}' } },
  '10': { value: { _light: '{colors.indigo.light.10}', _dark: '{colors.indigo.dark.10}' } },
  '11': { value: { _light: '{colors.indigo.light.11}', _dark: '{colors.indigo.dark.11}' } },
  '12': { value: { _light: '{colors.indigo.light.12}', _dark: '{colors.indigo.dark.12}' } },
  a1: { value: { _light: '{colors.indigo.light.a1}', _dark: '{colors.indigo.dark.a1}' } },
  a2: { value: { _light: '{colors.indigo.light.a2}', _dark: '{colors.indigo.dark.a2}' } },
  a3: { value: { _light: '{colors.indigo.light.a3}', _dark: '{colors.indigo.dark.a3}' } },
  a4: { value: { _light: '{colors.indigo.light.a4}', _dark: '{colors.indigo.dark.a4}' } },
  a5: { value: { _light: '{colors.indigo.light.a5}', _dark: '{colors.indigo.dark.a5}' } },
  a6: { value: { _light: '{colors.indigo.light.a6}', _dark: '{colors.indigo.dark.a6}' } },
  a7: { value: { _light: '{colors.indigo.light.a7}', _dark: '{colors.indigo.dark.a7}' } },
  a8: { value: { _light: '{colors.indigo.light.a8}', _dark: '{colors.indigo.dark.a8}' } },
  a9: { value: { _light: '{colors.indigo.light.a9}', _dark: '{colors.indigo.dark.a9}' } },
  a10: { value: { _light: '{colors.indigo.light.a10}', _dark: '{colors.indigo.dark.a10}' } },
  a11: { value: { _light: '{colors.indigo.light.a11}', _dark: '{colors.indigo.dark.a11}' } },
  a12: { value: { _light: '{colors.indigo.light.a12}', _dark: '{colors.indigo.dark.a12}' } },
  default: { value: { _light: '{colors.indigo.light.9}', _dark: '{colors.indigo.dark.9}' } },
  emphasized: { value: { _light: '{colors.indigo.light.10}', _dark: '{colors.indigo.dark.10}' } },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: { value: { _light: '{colors.indigo.light.a11}', _dark: '{colors.indigo.dark.a11}' } },
});

export default {
  name: 'indigo',
  tokens,
  semanticTokens,
};
