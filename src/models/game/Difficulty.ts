export enum DifficultyLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const gameDifficultyLevels = Object.freeze(Object.values(DifficultyLevel));

const isDifficultyLevelValid = (value: unknown): value is DifficultyLevel => {
  return gameDifficultyLevels.some((level) => level === value);
};

export const Difficulty = Object.freeze({
  isEasy: (value: unknown): value is DifficultyLevel.Easy => {
    return value === DifficultyLevel.Easy;
  },
  isMedium: (value: unknown): value is DifficultyLevel.Medium => {
    return value === DifficultyLevel.Medium;
  },
  isHard: (value: unknown): value is DifficultyLevel.Hard => {
    return value === DifficultyLevel.Hard;
  },
  isValid: isDifficultyLevelValid,
});
