import { DifficultyLevel } from '@/models';

export type GameContext = {
  sequence: string[];
  inputSequence: string[];
  userInput?: unknown[];
  currentLevel: DifficultyLevel;
  currentRound: 1 | 2 | 3 | 4 | 5;
  repeatAttempts: number;
  allowedErrorsCount: number;
};

export type SymbolsTypingContext = {
  sequence: GameContext['sequence'];
  currentIndex: number;
};

export const gameContextDefault: GameContext = Object.freeze({
  sequence: [],
  inputSequence: [],
  userInput: [],
  currentLevel: DifficultyLevel.Easy,
  currentRound: 1,
  repeatAttempts: 1,
  allowedErrorsCount: 1,
});
