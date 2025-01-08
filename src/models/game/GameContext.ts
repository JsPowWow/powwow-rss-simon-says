import { DifficultyLevel } from '@/models';

export type GameContext = {
  sequence: unknown[];
  userInput?: unknown[];
  currentLevel: DifficultyLevel;
  currentRound: number;
};

export const gameContextDefault: GameContext = Object.freeze({
  sequence: [],
  userInput: [],
  currentLevel: 'Medium',
  currentRound: 0,
});
