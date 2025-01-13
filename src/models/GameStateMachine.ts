import { and, AnyActorLogic, assign, emit, PromiseActorLogic, setup } from 'xstate';
import {
  DifficultyLevel,
  GameContext,
  gameContextDefault,
  generateSymbolsSequence,
  SymbolsTypingContext,
} from '@/models';
import { noop } from '@/shared/utils';

export const gameStateMachine = setup({
  types: {
    context: {} as GameContext,
    emitted: {} as { type: 'simulateTypeSymbol'; symbol: string } | { type: 'simulateTypeSymbolDone' },
    events: {} as
      | { type: 'updateLevel'; params: { level: DifficultyLevel } }
      | { type: 'newGame' }
      | { type: 'startRound' }
      | { type: 'onSymbolTypeSimulate'; character: string }
      | { type: 'repeatSequence' }
      | { type: 'inputSymbol'; params: { symbol: string } }
      | { type: 'completeInput' }
      | { type: 'retryRound' },
  },
  actors: {
    gameInitActor: {} as PromiseActorLogic<GameContext>,
    gameSequenceGenerationActor: {} as PromiseActorLogic<
      GameContext['sequence'],
      { level: DifficultyLevel; round: number }
    >,
    gameSymbolsTypingActor: {} as AnyActorLogic,
  },
  actions: {
    incrementRound: noop,
    handleInput: noop,
  },
  guards: {
    hasRepeatAttempts: ({ context }) => !!context.repeatAttempts,
    isInputCorrect: function () {
      // Add your guard condition here
      return true;
    },
    hasNoError: ({ context }) => Boolean(context.allowedErrorsCount),
    isFinalRound: function () {
      // Add your guard condition here
      return true;
    },
  },
  delays: {
    symbolTypingDelay: 1000,
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
        },
      },
      tags: ['processing'],
      description: 'This state initializes the game, setting the current round and level.',
    },
    waitingForRoundStart: {
      entry: assign(() => ({
        repeatAttempts: gameContextDefault.repeatAttempts,
      })),
      on: {
        updateLevel: {
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
        input: ({ context }) => ({
          level: context.currentLevel,
          round: context.currentRound,
        }),
        onDone: {
          target: 'typingSimulation',
          actions: assign(({ event }) => ({
            sequence: event.output.concat(),
          })),
        },
        onError: {
          // fallback
          target: 'typingSimulation',
          actions: assign(({ context }) => ({
            sequence: generateSymbolsSequence({ level: context.currentLevel, round: context.currentRound }),
          })),
        },
      },
      tags: ['processing'],
      description: 'This state generates a new sequence based on the current round and level.',
    },
    typingSimulation: {
      invoke: {
        id: 'gameSymbolsTypingActor',
        src: 'gameSymbolsTypingActor',
        input: ({ context: { sequence } }: { context: SymbolsTypingContext }) => ({
          sequence: sequence.concat(),
        }),
        onDone: {
          target: 'playingRound',
          actions: emit(() => ({
            type: 'simulateTypeSymbolDone',
          })),
        },
        onError: { target: 'playingRound' },
      },
      on: {
        onSymbolTypeSimulate: {
          reenter: true,
          actions: [
            emit(({ event }) => ({
              type: 'simulateTypeSymbol',
              symbol: event.character,
            })),
          ],
        },
      },
      tags: ['processing'],
      description: 'This state display to the user generated sequence using the keyboard or virtual keys.',
    },
    playingRound: {
      entry: assign(() => ({
        inputSequence: [],
      })),
      on: {
        newGame: {
          target: 'waitingForRoundStart',
        },
        repeatSequence: {
          target: 'typingSimulation',
          guard: 'hasRepeatAttempts',
          actions: assign(({ context }) => ({
            repeatAttempts: context.repeatAttempts - 1,
          })),
        },
        inputSymbol: {
          guard: and(['hasNoError']),
          actions: [
            assign(({ context, event }) => ({
              inputSequence: context.inputSequence.concat(event.params.symbol),
            })),
          ],
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
          guard: 'isFinalRound',
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
        newGame: {
          target: 'waitingForRoundStart',
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
