import { DifficultyLevel, GameContext, gameContextDefault, generateSymbolsSequence } from '@/models';
import { sleepFor } from '@/shared/utils';

export const initializeGame = async (): Promise<GameContext> => {
  return sleepFor(600, gameContextDefault);
};

export const generateSequenceAsync = ({
  input,
}: {
  input: { level: DifficultyLevel; round: number };
}): Promise<GameContext['sequence']> => sleepFor(1400, input).then(generateSymbolsSequence);
