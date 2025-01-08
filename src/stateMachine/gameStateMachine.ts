import { assign, setup } from 'xstate';
import { GameContext, gameContextDefault, GameEvent } from '@/models';
import { noop } from '@zag-js/utils';
import { gameInitializer } from './gameActors';

export const gameStateMachine = setup({
  types: {
    context: {} as GameContext,
    events: {} as GameEvent,
  },
  actions: {
    generateSequence: function ({ context, event }) {
      // Add your guard condition here
      // assign({
      //   aaaa: 'bbbb',
      // });
    },
    incrementRound: noop,
    handleInput: noop,
  },
  actors: { gameInitializer },
  guards: {
    isInputCorrect: function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
    isFinalRound: function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
  },
}).createMachine({
  id: 'simonSaysStateMachine',
  context: gameContextDefault,
  initial: 'initializing',
  states: {
    initializing: {
      invoke: {
        src: 'gameInitializer',
        onDone: {
          target: 'waitingForRoundStart',
          actions: assign({
            currentLevel: ({ event: { output } }) => output.currentLevel,
            currentRound: ({ event: { output } }) => output.currentRound,
            sequence: ({ event: { output } }) => output.sequence,
          }),
        },
        onError: {
          target: 'waitingForRoundStart',
          actions: assign(gameContextDefault),
        },
      },
      description: 'This state initializes the game, setting the current round and level.',
    },
    waitingForRoundStart: {
      on: {
        startRound: {
          target: 'generatingSequence',
        },
      },
      description: 'This state waits for the user to start the next round.',
    },
    generatingSequence: {
      always: {
        target: 'playingRound',
      },
      entry: {
        type: 'generateSequence',
      },
      description: 'This state generates a new sequence based on the current round and level.',
    },
    playingRound: {
      on: {
        inputSymbol: {
          actions: {
            type: 'handleInput',
          },
        },
        completeInput: [
          {
            target: 'roundSuccess',
            guard: {
              type: 'isInputCorrect',
            },
          },
          {
            target: 'roundFailure',
          },
        ],
      },
      description: 'This state allows the user to input their sequence using the keyboard or virtual keys.',
    },
    roundSuccess: {
      always: [
        {
          target: 'gameComplete',
          guard: {
            type: 'isFinalRound',
          },
        },
        {
          target: 'waitingForRoundStart',
        },
      ],
      entry: {
        type: 'incrementRound',
      },
      description: 'This state is reached when the user successfully repeats the sequence.',
    },
    roundFailure: {
      on: {
        retryRound: {
          target: 'playingRound',
        },
        resetGame: {
          target: 'initializing',
        },
      },
      description: 'This state is reached when the user fails to repeat the sequence correctly.',
    },
    gameComplete: {
      type: 'final',
      description: 'This state is reached when the user successfully completes all rounds of the game.',
    },
  },
});
