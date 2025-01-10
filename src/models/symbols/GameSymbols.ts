export const GameSymbols = {
  numbers: Object.freeze(Array.from({ length: 10 }, (_, i) => i).map((n) => n.toString(10))), // (0...9),
  letters: Object.freeze(Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))), // (a...z)
};
