import { DifficultyLevel } from '@/models';

export type GameEvent =
  | { type: 'setLevel'; params: { level: DifficultyLevel } }
  | { type: 'startRound' }
  | { type: 'inputSymbol' }
  | { type: 'completeInput' }
  | { type: 'retryRound' }
  | { type: 'resetGame' };
