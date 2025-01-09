import { assign, PromiseActorLogic, setup } from 'xstate';
import { DifficultyLevel, GameContext, gameContextDefault, GameEvent } from '@/models';
import { noop } from '@zag-js/utils';

export const gameStateMachine = setup({
  types: {
    context: {} as GameContext,
    events: {} as GameEvent,
  },
  actors: {
    gameInitActor: {} as PromiseActorLogic<GameContext>,
    gameSequenceGenerationActor: {} as PromiseActorLogic<GameContext['sequence'], DifficultyLevel>,
  },
  actions: {
    incrementRound: noop,
    handleInput: noop,
  },
  guards: {
    isInputCorrect: function () {
      // Add your guard condition here
      return true;
    },
    isFinalRound: function () {
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
        id: 'gameInitActor',
        src: 'gameInitActor',
        onDone: {
          target: 'waitingForRoundStart',
          actions: assign(({ event }) => ({
            currentLevel: event.output.currentLevel,
          })),
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
        setLevel: {
          actions: assign(({ event }) => ({
            currentLevel: event.params.level,
          })),
        },
        startRound: {
          target: 'generatingSequence',
        },
      },
      description: 'This state waits for the user to start the next round.',
    },
    generatingSequence: {
      invoke: {
        id: 'gameSequenceGenerationActor',
        src: 'gameSequenceGenerationActor',
        input: ({ context }) => context.currentLevel,
        onDone: {
          target: 'playingRound',
          actions: assign(({ event }) => ({
            sequence: event.output.concat(),
          })),
        },
        onError: {
          target: 'initializing',
        },
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
