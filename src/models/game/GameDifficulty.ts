import { isMatching, P } from 'ts-pattern';
import { GameSymbols } from '@/models';
import { getRandomItem, toShuffledArray } from '@/shared/utils';

export enum DifficultyLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const gameDifficultyLevels = Object.freeze(Object.values(DifficultyLevel));

export const GameDifficulty = Object.freeze({
  isEasy: (level: unknown): level is DifficultyLevel.Easy => {
    return level === DifficultyLevel.Easy;
  },
  isMedium: (level: unknown): level is DifficultyLevel.Medium => {
    return level === DifficultyLevel.Medium;
  },
  isHard: (level: unknown): level is DifficultyLevel.Hard => {
    return level === DifficultyLevel.Hard;
  },
  isValid: (value: unknown): value is DifficultyLevel => {
    return gameDifficultyLevels.some((level) => level === value);
  },
  usingNumbers: (level: DifficultyLevel) => isMatching(P.union(DifficultyLevel.Easy, DifficultyLevel.Hard), level),
  usingLetters: (level: DifficultyLevel) => isMatching(P.union(DifficultyLevel.Medium, DifficultyLevel.Hard), level),
});

/**
 * @description
 *  - The first round starts with 2 symbols based on the level of difficulty.
 *  - Each new round provides a new randomly generated sequence, increasing the sequence length by two symbols.
 */
export const generateSymbolsSequence = (input: { level: DifficultyLevel; round: number }): Array<string> => {
  const symbolsSequenceNum = input.round * 2;
  const symbolsByLevel = toShuffledArray([
    ...(GameDifficulty.usingNumbers(input.level) ? GameSymbols.numbers : []),
    ...(GameDifficulty.usingLetters(input.level) ? GameSymbols.letters : []),
  ]);
  const result = [];
  for (let i = 0; i < symbolsSequenceNum; i++) {
    result.push(getRandomItem(symbolsByLevel));
  }
  return result;
};
