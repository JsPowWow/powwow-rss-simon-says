import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

const tokens = defineTokens.colors({
  light: {
    '1': { value: '#fdfdff' },
    '2': { value: '#f8f8ff' },
    '3': { value: '#f0f1fe' },
    '4': { value: '#e6e7ff' },
    '5': { value: '#dadcff' },
    '6': { value: '#cbcdff' },
    '7': { value: '#b8baf8' },
    '8': { value: '#9b9ef0' },
    '9': { value: '#5b5bd6' },
    '10': { value: '#5151cd' },
    '11': { value: '#5753c6' },
    '12': { value: '#272962' },
    a1: { value: '#0000ff02' },
    a2: { value: '#0000ff07' },
    a3: { value: '#0011ee0f' },
    a4: { value: '#000bff19' },
    a5: { value: '#000eff25' },
    a6: { value: '#000aff34' },
    a7: { value: '#0008e647' },
    a8: { value: '#0008d964' },
    a9: { value: '#0000c0a4' },
    a10: { value: '#0000b6ae' },
    a11: { value: '#0600abac' },
    a12: { value: '#000246d8' },
  },
  dark: {
    '1': { value: '#13131e' },
    '2': { value: '#171625' },
    '3': { value: '#202248' },
    '4': { value: '#262a65' },
    '5': { value: '#303374' },
    '6': { value: '#3d3e82' },
    '7': { value: '#4a4a95' },
    '8': { value: '#5958b1' },
    '9': { value: '#5b5bd6' },
    '10': { value: '#6e6ade' },
    '11': { value: '#b1a9ff' },
    '12': { value: '#e0dffe' },
    a1: { value: '#3636fe0e' },
    a2: { value: '#564bf916' },
    a3: { value: '#525bff3b' },
    a4: { value: '#4d58ff5a' },
    a5: { value: '#5b62fd6b' },
    a6: { value: '#6d6ffd7a' },
    a7: { value: '#7777fe8e' },
    a8: { value: '#7b7afeac' },
    a9: { value: '#6a6afed4' },
    a10: { value: '#7d79ffdc' },
    a11: { value: '#b1a9ff' },
    a12: { value: '#e1e0fffe' },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  '1': { value: { _light: '{colors.iris.light.1}', _dark: '{colors.iris.dark.1}' } },
  '2': { value: { _light: '{colors.iris.light.2}', _dark: '{colors.iris.dark.2}' } },
  '3': { value: { _light: '{colors.iris.light.3}', _dark: '{colors.iris.dark.3}' } },
  '4': { value: { _light: '{colors.iris.light.4}', _dark: '{colors.iris.dark.4}' } },
  '5': { value: { _light: '{colors.iris.light.5}', _dark: '{colors.iris.dark.5}' } },
  '6': { value: { _light: '{colors.iris.light.6}', _dark: '{colors.iris.dark.6}' } },
  '7': { value: { _light: '{colors.iris.light.7}', _dark: '{colors.iris.dark.7}' } },
  '8': { value: { _light: '{colors.iris.light.8}', _dark: '{colors.iris.dark.8}' } },
  '9': { value: { _light: '{colors.iris.light.9}', _dark: '{colors.iris.dark.9}' } },
  '10': { value: { _light: '{colors.iris.light.10}', _dark: '{colors.iris.dark.10}' } },
  '11': { value: { _light: '{colors.iris.light.11}', _dark: '{colors.iris.dark.11}' } },
  '12': { value: { _light: '{colors.iris.light.12}', _dark: '{colors.iris.dark.12}' } },
  a1: { value: { _light: '{colors.iris.light.a1}', _dark: '{colors.iris.dark.a1}' } },
  a2: { value: { _light: '{colors.iris.light.a2}', _dark: '{colors.iris.dark.a2}' } },
  a3: { value: { _light: '{colors.iris.light.a3}', _dark: '{colors.iris.dark.a3}' } },
  a4: { value: { _light: '{colors.iris.light.a4}', _dark: '{colors.iris.dark.a4}' } },
  a5: { value: { _light: '{colors.iris.light.a5}', _dark: '{colors.iris.dark.a5}' } },
  a6: { value: { _light: '{colors.iris.light.a6}', _dark: '{colors.iris.dark.a6}' } },
  a7: { value: { _light: '{colors.iris.light.a7}', _dark: '{colors.iris.dark.a7}' } },
  a8: { value: { _light: '{colors.iris.light.a8}', _dark: '{colors.iris.dark.a8}' } },
  a9: { value: { _light: '{colors.iris.light.a9}', _dark: '{colors.iris.dark.a9}' } },
  a10: { value: { _light: '{colors.iris.light.a10}', _dark: '{colors.iris.dark.a10}' } },
  a11: { value: { _light: '{colors.iris.light.a11}', _dark: '{colors.iris.dark.a11}' } },
  a12: { value: { _light: '{colors.iris.light.a12}', _dark: '{colors.iris.dark.a12}' } },
  default: { value: { _light: '{colors.iris.light.9}', _dark: '{colors.iris.dark.9}' } },
  emphasized: { value: { _light: '{colors.iris.light.10}', _dark: '{colors.iris.dark.10}' } },
  fg: { value: { _light: 'white', _dark: 'white' } },
  text: { value: { _light: '{colors.iris.light.a11}', _dark: '{colors.iris.dark.a11}' } },
});

export default {
  name: 'iris',
  tokens,
  semanticTokens,
};
