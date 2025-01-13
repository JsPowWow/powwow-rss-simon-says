import { and, AnyActorLogic, assertEvent, assign, emit, not, PromiseActorLogic, setup } from 'xstate';
import {
  DifficultyLevel,
  GameContext,
  gameContextDefault,
  generateSymbolsSequence,
  SymbolsTypingContext,
} from '@/models';

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
      | { type: 'inputSymbol'; params: { character: string } },
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
    initializeGame: assign(() => ({
      repeatAttempts: gameContextDefault.repeatAttempts,
      currentRound: 1,
    })),
    generateSequence: assign(({ context: { currentLevel, currentRound } }) => ({
      sequence: generateSymbolsSequence({ level: currentLevel, round: currentRound }),
    })),
    initializeNextRound: assign(({ context: { currentRound } }) => ({
      repeatAttempts: gameContextDefault.repeatAttempts,
      currentRound: ++currentRound,
    })),
    updateDifficultyLevel: assign(({ event }) => {
      assertEvent(event, 'updateLevel');
      return {
        currentLevel: event.params.level,
      };
    }),
    decreaseRepeatAttempts: assign(({ context: { repeatAttempts } }) => ({
      repeatAttempts: repeatAttempts - 1,
    })),
    resetInputSequence: assign(() => ({
      inputSequence: [],
    })),
    appendInputSequence: assign(({ context, event }) => {
      assertEvent(event, 'inputSymbol');
      return {
        inputSequence: context.inputSequence.concat(event.params.character),
      };
    }),
  },
  guards: {
    hasRepeatAttempts: ({ context: { repeatAttempts } }) => !!repeatAttempts,
    isValidInputCharacter: ({ context: { sequence, inputSequence }, event }) => {
      assertEvent(event, 'inputSymbol');
      return sequence.join('').startsWith([...inputSequence, event.params.character].join(''));
    },
    isInputComplete: ({ context: { sequence, inputSequence }, event }) => {
      assertEvent(event, 'inputSymbol');
      return sequence.join('') === [...inputSequence, event.params.character].join('');
    },
    isFinalRound: ({ context: { currentRound } }) => currentRound >= 5,
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
          target: 'waitingForGameStart',
          actions: assign(({ event: { output } }) => ({
            currentLevel: output.currentLevel,
          })),
        },
        onError: { target: 'waitingForGameStart' },
      },
      tags: ['processing'],
      description: 'This state initializes the game, setting the current round and level.',
    },
    waitingForGameStart: {
      entry: 'initializeGame',
      on: {
        updateLevel: { actions: 'updateDifficultyLevel' },
        startRound: { target: 'generatingSequence' },
      },
      description: 'This state waits for the user to start the next round.',
    },
    generatingSequence: {
      invoke: {
        id: 'gameSequenceGenerationActor',
        src: 'gameSequenceGenerationActor',
        input: ({ context: { currentLevel, currentRound } }) => ({
          level: currentLevel,
          round: currentRound,
        }),
        onDone: {
          target: 'typingSimulation',
          actions: assign(({ event: { output } }) => ({
            sequence: output.concat(),
          })),
        },
        onError: {
          // fallback
          target: 'typingSimulation',
          actions: 'generateSequence',
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
          actions: emit(() => ({
            type: 'simulateTypeSymbolDone',
          })),
          target: 'playingRound',
        },
        onError: { target: 'playingRound' },
      },
      on: {
        onSymbolTypeSimulate: {
          reenter: true,
          actions: [
            emit(({ event: { character } }) => ({
              type: 'simulateTypeSymbol',
              symbol: character,
            })),
          ],
        },
      },
      tags: ['processing'],
      description: 'This state display to the user generated sequence using the keyboard or virtual keys.',
    },
    playingRound: {
      entry: 'resetInputSequence',
      on: {
        newGame: { target: 'waitingForGameStart' },
        repeatSequence: {
          guard: 'hasRepeatAttempts',
          target: 'typingSimulation',
          actions: 'decreaseRepeatAttempts',
        },
        inputSymbol: [
          {
            guard: and(['isValidInputCharacter', not('isInputComplete')]),
            actions: 'appendInputSequence',
          },
          {
            guard: not('isValidInputCharacter'),
            target: 'roundFailure',
          },
          {
            guard: 'isInputComplete',
            target: 'roundSuccess',
            actions: 'appendInputSequence',
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
      ],
      on: {
        newGame: { target: 'waitingForGameStart' },
        startRound: {
          target: 'generatingSequence',
          actions: 'initializeNextRound',
        },
      },
      description: 'This state is reached when the user successfully repeats the sequence.',
    },
    roundFailure: {
      on: {
        repeatSequence: {
          guard: 'hasRepeatAttempts',
          target: 'typingSimulation',
          actions: 'decreaseRepeatAttempts',
        },
        newGame: {
          target: 'waitingForGameStart',
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
