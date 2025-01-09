import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fdfdfc' },
    '2': { value: '#f9f9f8' },
    '3': { value: '#f1f0ef' },
    '4': { value: '#e9e8e6' },
    '5': { value: '#e2e1de' },
    '6': { value: '#dad9d6' },
    '7': { value: '#cfceca' },
    '8': { value: '#bcbbb5' },
    '9': { value: '#8d8d86' },
    '10': { value: '#82827c' },
    '11': { value: '#63635e' },
    '12': { value: '#21201c' },
    a1: { value: '#55550003' },
    a2: { value: '#25250007' },
    a3: { value: '#20100010' },
    a4: { value: '#1f150019' },
    a5: { value: '#1f180021' },
    a6: { value: '#19130029' },
    a7: { value: '#19140035' },
    a8: { value: '#1915014a' },
    a9: { value: '#0f0f0079' },
    a10: { value: '#0c0c0083' },
    a11: { value: '#080800a1' },
    a12: { value: '#060500e3' },
  },
  dark: {
    '1': { value: '#111110' },
    '2': { value: '#191918' },
    '3': { value: '#222221' },
    '4': { value: '#2a2a28' },
    '5': { value: '#31312e' },
    '6': { value: '#3b3a37' },
    '7': { value: '#494844' },
    '8': { value: '#62605b' },
    '9': { value: '#6f6d66' },
    '10': { value: '#7c7b74' },
    '11': { value: '#b5b3ad' },
    '12': { value: '#eeeeec' },
    a1: { value: '#00000000' },
    a2: { value: '#f4f4f309' },
    a3: { value: '#f6f6f513' },
    a4: { value: '#fefef31b' },
    a5: { value: '#fbfbeb23' },
    a6: { value: '#fffaed2d' },
    a7: { value: '#fffbed3c' },
    a8: { value: '#fff9eb57' },
    a9: { value: '#fffae965' },
    a10: { value: '#fffdee73' },
    a11: { value: '#fffcf4b0' },
    a12: { value: '#fffffded' },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.sand.light.1}', _dark: '{colors.sand.dark.1}' } },
  '2': { value: { _light: '{colors.sand.light.2}', _dark: '{colors.sand.dark.2}' } },
  '3': { value: { _light: '{colors.sand.light.3}', _dark: '{colors.sand.dark.3}' } },
  '4': { value: { _light: '{colors.sand.light.4}', _dark: '{colors.sand.dark.4}' } },
  '5': { value: { _light: '{colors.sand.light.5}', _dark: '{colors.sand.dark.5}' } },
  '6': { value: { _light: '{colors.sand.light.6}', _dark: '{colors.sand.dark.6}' } },
  '7': { value: { _light: '{colors.sand.light.7}', _dark: '{colors.sand.dark.7}' } },
  '8': { value: { _light: '{colors.sand.light.8}', _dark: '{colors.sand.dark.8}' } },
  '9': { value: { _light: '{colors.sand.light.9}', _dark: '{colors.sand.dark.9}' } },
  '10': { value: { _light: '{colors.sand.light.10}', _dark: '{colors.sand.dark.10}' } },
  '11': { value: { _light: '{colors.sand.light.11}', _dark: '{colors.sand.dark.11}' } },
  '12': { value: { _light: '{colors.sand.light.12}', _dark: '{colors.sand.dark.12}' } },
  a1: { value: { _light: '{colors.sand.light.a1}', _dark: '{colors.sand.dark.a1}' } },
  a2: { value: { _light: '{colors.sand.light.a2}', _dark: '{colors.sand.dark.a2}' } },
  a3: { value: { _light: '{colors.sand.light.a3}', _dark: '{colors.sand.dark.a3}' } },
  a4: { value: { _light: '{colors.sand.light.a4}', _dark: '{colors.sand.dark.a4}' } },
  a5: { value: { _light: '{colors.sand.light.a5}', _dark: '{colors.sand.dark.a5}' } },
  a6: { value: { _light: '{colors.sand.light.a6}', _dark: '{colors.sand.dark.a6}' } },
  a7: { value: { _light: '{colors.sand.light.a7}', _dark: '{colors.sand.dark.a7}' } },
  a8: { value: { _light: '{colors.sand.light.a8}', _dark: '{colors.sand.dark.a8}' } },
  a9: { value: { _light: '{colors.sand.light.a9}', _dark: '{colors.sand.dark.a9}' } },
  a10: { value: { _light: '{colors.sand.light.a10}', _dark: '{colors.sand.dark.a10}' } },
  a11: { value: { _light: '{colors.sand.light.a11}', _dark: '{colors.sand.dark.a11}' } },
  a12: { value: { _light: '{colors.sand.light.a12}', _dark: '{colors.sand.dark.a12}' } },

  default: { value: { _light: '{colors.sand.light.9}', _dark: '{colors.sand.dark.9}' } },
  emphasized: { value: { _light: '{colors.sand.light.10}', _dark: '{colors.sand.dark.10}' } },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: { value: { _light: '{colors.sand.light.12}', _dark: '{colors.sand.dark.12}' } },
});

export default {
  name: 'sand',
  tokens,
  semanticTokens,
};