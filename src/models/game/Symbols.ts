export const Numbers = Object.freeze(Array.from({ length: 10 }, (_, i) => i)); // (0...9)
export const Characters = Object.freeze(Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))); // (a...z)
