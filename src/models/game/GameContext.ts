import { DifficultyLevel } from '@/models';

export type GameContext = {
  sequence: string[];
  userInput?: unknown[];
  currentLevel: DifficultyLevel;
  currentRound: number;
};

export const gameContextDefault: GameContext = Object.freeze({
  sequence: [],
  userInput: [],
  currentLevel: DifficultyLevel.Easy,
  currentRound: 0,
});
