import { GameContext, GameEvent } from '@/models';
import { sleepFor } from '@/shared/utils';
import { fromPromise } from 'xstate';

export type ActionProcessFunction = <Params = undefined>(
  options: { context: GameContext; event: GameEvent },
  params: Params
) => void;

const initializeGame = async (): Promise<GameContext> => {
  return sleepFor(3000, {
    currentRound: 0,
    currentLevel: 'Easy',
    sequence: [],
  });
};

export const gameInitializer = fromPromise(initializeGame);
