import { Difficulty, DifficultyLevel, GameContext } from '@/models';
import { sleepFor } from '@/shared/utils';
import { match } from 'ts-pattern';

export const initializeGame = async (): Promise<GameContext> => {
  return sleepFor(3000, {
    currentRound: 0,
    currentLevel: DifficultyLevel.Medium,
    sequence: [],
  });
};

export const generateSequence = async ({ input }: { input: DifficultyLevel }): Promise<GameContext['sequence']> => {
  return sleepFor(3000, input).then((level) =>
    match(level)
      .when(Difficulty.isEasy, (_easy) => {
        return ['TODO AR'];
      })
      .when(Difficulty.isMedium, (_easy) => {
        return ['TODO AR'];
      })
      .when(Difficulty.isHard, (_easy) => {
        return ['TODO AR'];
      })
      .exhaustive()
  );
};
