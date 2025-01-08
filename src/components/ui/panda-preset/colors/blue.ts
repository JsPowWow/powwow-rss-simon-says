import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fbfdff' },
    '2': { value: '#f4faff' },
    '3': { value: '#e6f4fe' },
    '4': { value: '#d5efff' },
    '5': { value: '#c2e5ff' },
    '6': { value: '#acd8fc' },
    '7': { value: '#8ec8f6' },
    '8': { value: '#5eb1ef' },
    '9': { value: '#0090ff' },
    '10': { value: '#0588f0' },
    '11': { value: '#0d74ce' },
    '12': { value: '#113264' },
    a1: { value: '#0080ff04' },
    a2: { value: '#008cff0b' },
    a3: { value: '#008ff519' },
    a4: { value: '#009eff2a' },
    a5: { value: '#0093ff3d' },
    a6: { value: '#0088f653' },
    a7: { value: '#0083eb71' },
    a8: { value: '#0084e6a1' },
    a9: { value: '#0090ff' },
    a10: { value: '#0086f0fa' },
    a11: { value: '#006dcbf2' },
    a12: { value: '#002359ee' },
  },
  dark: {
    '1': { value: '#0d1520' },
    '2': { value: '#111927' },
    '3': { value: '#0d2847' },
    '4': { value: '#003362' },
    '5': { value: '#004074' },
    '6': { value: '#104d87' },
    '7': { value: '#205d9e' },
    '8': { value: '#2870bd' },
    '9': { value: '#0090ff' },
    '10': { value: '#3b9eff' },
    '11': { value: '#70b8ff' },
    '12': { value: '#c2e6ff' },
    a1: { value: '#004df211' },
    a2: { value: '#1166fb18' },
    a3: { value: '#0077ff3a' },
    a4: { value: '#0075ff57' },
    a5: { value: '#0081fd6b' },
    a6: { value: '#0f89fd7f' },
    a7: { value: '#2a91fe98' },
    a8: { value: '#3094feb9' },
    a9: { value: '#0090ff' },
    a10: { value: '#3b9eff' },
    a11: { value: '#70b8ff' },
    a12: { value: '#c2e6ff' },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.blue.light.1}', _dark: '{colors.blue.dark.1}' } },
  '2': { value: { _light: '{colors.blue.light.2}', _dark: '{colors.blue.dark.2}' } },
  '3': { value: { _light: '{colors.blue.light.3}', _dark: '{colors.blue.dark.3}' } },
  '4': { value: { _light: '{colors.blue.light.4}', _dark: '{colors.blue.dark.4}' } },
  '5': { value: { _light: '{colors.blue.light.5}', _dark: '{colors.blue.dark.5}' } },
  '6': { value: { _light: '{colors.blue.light.6}', _dark: '{colors.blue.dark.6}' } },
  '7': { value: { _light: '{colors.blue.light.7}', _dark: '{colors.blue.dark.7}' } },
  '8': { value: { _light: '{colors.blue.light.8}', _dark: '{colors.blue.dark.8}' } },
  '9': { value: { _light: '{colors.blue.light.9}', _dark: '{colors.blue.dark.9}' } },
  '10': { value: { _light: '{colors.blue.light.10}', _dark: '{colors.blue.dark.10}' } },
  '11': { value: { _light: '{colors.blue.light.11}', _dark: '{colors.blue.dark.11}' } },
  '12': { value: { _light: '{colors.blue.light.12}', _dark: '{colors.blue.dark.12}' } },
  a1: { value: { _light: '{colors.blue.light.a1}', _dark: '{colors.blue.dark.a1}' } },
  a2: { value: { _light: '{colors.blue.light.a2}', _dark: '{colors.blue.dark.a2}' } },
  a3: { value: { _light: '{colors.blue.light.a3}', _dark: '{colors.blue.dark.a3}' } },
  a4: { value: { _light: '{colors.blue.light.a4}', _dark: '{colors.blue.dark.a4}' } },
  a5: { value: { _light: '{colors.blue.light.a5}', _dark: '{colors.blue.dark.a5}' } },
  a6: { value: { _light: '{colors.blue.light.a6}', _dark: '{colors.blue.dark.a6}' } },
  a7: { value: { _light: '{colors.blue.light.a7}', _dark: '{colors.blue.dark.a7}' } },
  a8: { value: { _light: '{colors.blue.light.a8}', _dark: '{colors.blue.dark.a8}' } },
  a9: { value: { _light: '{colors.blue.light.a9}', _dark: '{colors.blue.dark.a9}' } },
  a10: { value: { _light: '{colors.blue.light.a10}', _dark: '{colors.blue.dark.a10}' } },
  a11: { value: { _light: '{colors.blue.light.a11}', _dark: '{colors.blue.dark.a11}' } },
  a12: { value: { _light: '{colors.blue.light.a12}', _dark: '{colors.blue.dark.a12}' } },

  default: { value: { _light: '{colors.blue.light.9}', _dark: '{colors.blue.dark.9}' } },
  emphasized: { value: { _light: '{colors.blue.light.10}', _dark: '{colors.blue.dark.10}' } },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: { value: { _light: '{colors.blue.light.a11}', _dark: '{colors.blue.dark.a11}' } },
});

export default {
  name: 'blue',
  tokens,
  semanticTokens,
};
