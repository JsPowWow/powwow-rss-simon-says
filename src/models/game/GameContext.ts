import { DifficultyLevel } from '@/models';

export type GameContext = {
  sequence: string[];
  inputSequence: string[];
  currentLevel: DifficultyLevel;
  currentRound: number;
  repeatAttempts: number;
};

export type SymbolsTypingContext = {
  sequence: GameContext['sequence'];
  currentIndex: number;
};

export const gameContextDefault: GameContext = Object.freeze({
  sequence: [],
  inputSequence: [],
  currentLevel: DifficultyLevel.Easy,
  currentRound: 1,
  repeatAttempts: 1,
});
