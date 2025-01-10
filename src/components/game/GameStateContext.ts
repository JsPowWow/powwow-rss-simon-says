'use client';

import { createActorContext } from '@xstate/react';
import { gameStateMachine, gameSymbolsTypingMachine, generateSequenceAsync, initializeGame } from '@/models';
import { fromPromise } from 'xstate';
import { createBrowserInspector } from '@statelyai/inspect';

export const inspector = createBrowserInspector({
  // TODO AR uncomment to stop it automatically starting;
  // TODO AR toggle start (?)
  // autoStart: false,
});

export const GameStateContext = createActorContext(
  gameStateMachine.provide({
    actors: {
      gameInitActor: fromPromise(initializeGame),
      // TODO AR can safe comment to have sync generate behaviour
      gameSequenceGenerationActor: fromPromise(generateSequenceAsync),
      gameSymbolsTypingActor: gameSymbolsTypingMachine,
    },
  }),
  { inspect: inspector.inspect }
);
