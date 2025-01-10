'use client';

import { GameStateContext } from './GameStateContext';
import { GameView } from './views/GameView';

export const Game = () => {
  return (
    <GameStateContext.Provider>
      <GameView />
    </GameStateContext.Provider>
  );
};
