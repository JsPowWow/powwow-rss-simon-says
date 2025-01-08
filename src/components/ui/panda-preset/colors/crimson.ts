import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fffcfd' },
    '2': { value: '#fef7f9' },
    '3': { value: '#ffe9f0' },
    '4': { value: '#fedce7' },
    '5': { value: '#facedd' },
    '6': { value: '#f3bed1' },
    '7': { value: '#eaacc3' },
    '8': { value: '#e093b2' },
    '9': { value: '#e93d82' },
    '10': { value: '#df3478' },
    '11': { value: '#cb1d63' },
    '12': { value: '#621639' },
    a1: { value: '#ff005503' },
    a2: { value: '#e0004008' },
    a3: { value: '#ff005216' },
    a4: { value: '#f8005123' },
    a5: { value: '#e5004f31' },
    a6: { value: '#d0004b41' },
    a7: { value: '#bf004753' },
    a8: { value: '#b6004a6c' },
    a9: { value: '#e2005bc2' },
    a10: { value: '#d70056cb' },
    a11: { value: '#c4004fe2' },
    a12: { value: '#530026e9' },
  },
  dark: {
    '1': { value: '#191114' },
    '2': { value: '#201318' },
    '3': { value: '#381525' },
    '4': { value: '#4d122f' },
    '5': { value: '#5c1839' },
    '6': { value: '#6d2545' },
    '7': { value: '#873356' },
    '8': { value: '#b0436e' },
    '9': { value: '#e93d82' },
    '10': { value: '#ee518a' },
    '11': { value: '#ff92ad' },
    '12': { value: '#fdd3e8' },
    a1: { value: '#f4126709' },
    a2: { value: '#f22f7a11' },
    a3: { value: '#fe2a8b2a' },
    a4: { value: '#fd158741' },
    a5: { value: '#fd278f51' },
    a6: { value: '#fe459763' },
    a7: { value: '#fd559b7f' },
    a8: { value: '#fe5b9bab' },
    a9: { value: '#fe418de8' },
    a10: { value: '#ff5693ed' },
    a11: { value: '#ff92ad' },
    a12: { value: '#ffd5eafd' },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.crimson.light.1}', _dark: '{colors.crimson.dark.1}' } },
  '2': { value: { _light: '{colors.crimson.light.2}', _dark: '{colors.crimson.dark.2}' } },
  '3': { value: { _light: '{colors.crimson.light.3}', _dark: '{colors.crimson.dark.3}' } },
  '4': { value: { _light: '{colors.crimson.light.4}', _dark: '{colors.crimson.dark.4}' } },
  '5': { value: { _light: '{colors.crimson.light.5}', _dark: '{colors.crimson.dark.5}' } },
  '6': { value: { _light: '{colors.crimson.light.6}', _dark: '{colors.crimson.dark.6}' } },
  '7': { value: { _light: '{colors.crimson.light.7}', _dark: '{colors.crimson.dark.7}' } },
  '8': { value: { _light: '{colors.crimson.light.8}', _dark: '{colors.crimson.dark.8}' } },
  '9': { value: { _light: '{colors.crimson.light.9}', _dark: '{colors.crimson.dark.9}' } },
  '10': { value: { _light: '{colors.crimson.light.10}', _dark: '{colors.crimson.dark.10}' } },
  '11': { value: { _light: '{colors.crimson.light.11}', _dark: '{colors.crimson.dark.11}' } },
  '12': { value: { _light: '{colors.crimson.light.12}', _dark: '{colors.crimson.dark.12}' } },
  a1: { value: { _light: '{colors.crimson.light.a1}', _dark: '{colors.crimson.dark.a1}' } },
  a2: { value: { _light: '{colors.crimson.light.a2}', _dark: '{colors.crimson.dark.a2}' } },
  a3: { value: { _light: '{colors.crimson.light.a3}', _dark: '{colors.crimson.dark.a3}' } },
  a4: { value: { _light: '{colors.crimson.light.a4}', _dark: '{colors.crimson.dark.a4}' } },
  a5: { value: { _light: '{colors.crimson.light.a5}', _dark: '{colors.crimson.dark.a5}' } },
  a6: { value: { _light: '{colors.crimson.light.a6}', _dark: '{colors.crimson.dark.a6}' } },
  a7: { value: { _light: '{colors.crimson.light.a7}', _dark: '{colors.crimson.dark.a7}' } },
  a8: { value: { _light: '{colors.crimson.light.a8}', _dark: '{colors.crimson.dark.a8}' } },
  a9: { value: { _light: '{colors.crimson.light.a9}', _dark: '{colors.crimson.dark.a9}' } },
  a10: { value: { _light: '{colors.crimson.light.a10}', _dark: '{colors.crimson.dark.a10}' } },
  a11: { value: { _light: '{colors.crimson.light.a11}', _dark: '{colors.crimson.dark.a11}' } },
  a12: { value: { _light: '{colors.crimson.light.a12}', _dark: '{colors.crimson.dark.a12}' } },
  default: { value: { _light: '{colors.crimson.light.9}', _dark: '{colors.crimson.dark.9}' } },
  emphasized: { value: { _light: '{colors.crimson.light.10}', _dark: '{colors.crimson.dark.10}' } },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: { value: { _light: '{colors.crimson.light.a11}', _dark: '{colors.crimson.dark.a11}' } },
});

export default {
  name: 'crimson',
  tokens,
  semanticTokens,
};
