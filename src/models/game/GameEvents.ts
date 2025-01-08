export type GameEvent =
  | { type: 'ready' }
  | { type: 'startRound' }
  | { type: 'inputSymbol' }
  | { type: 'completeInput' }
  | { type: 'retryRound' }
  | { type: 'resetGame' };
