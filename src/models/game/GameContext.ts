import { DifficultyLevel } from '@/models';

export type GameContext = {
  sequence: string[];
  userInput?: unknown[];
  currentLevel: DifficultyLevel;
  currentRound: 1 | 2 | 3 | 4 | 5;
  lives: number;
};

export const gameContextDefault: GameContext = Object.freeze({
  sequence: [],
  userInput: [],
  currentLevel: DifficultyLevel.Easy,
  currentRound: 1,
  lives: 1,
});
