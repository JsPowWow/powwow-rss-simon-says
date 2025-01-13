import { assign, not, raise, sendParent, setup } from 'xstate';
import { SymbolsTypingContext } from '@/models';

export const gameSymbolsTypingMachine = setup({
  types: {
    input: {} as Pick<SymbolsTypingContext, 'sequence'>,
    context: {} as SymbolsTypingContext,
    events: {} as { type: 'press' },
  },
  guards: {
    hasNext: ({ context: { sequence, currentIndex } }) => Boolean(sequence.length && currentIndex < sequence.length),
  },
}).createMachine({
  context: ({ input: { sequence } }) => ({
    sequence,
    currentIndex: 0,
  }),
  id: 'typingMachine',
  initial: 'typing',
  states: {
    typing: {
      on: {
        press: [
          {
            guard: 'hasNext',
            reenter: true,
            target: 'typing',
          },
          {
            guard: not('hasNext'),
            target: 'completed',
          },
        ],
      },
      entry: [
        sendParent(({ context: { sequence, currentIndex } }) => ({
          type: 'onSymbolTypeSimulate',
          character: sequence[currentIndex],
        })),
        assign(({ context: { currentIndex } }) => ({
          currentIndex: ++currentIndex,
        })),
        raise({ type: 'press' }, { delay: 1000 }),
      ],
      description:
        'Simulates typing of characters from the input array. It processes one character at a time with a delay, and goes to the next character until the end of the array is reached.',
    },
    completed: {
      type: 'final',
      description:
        'This state signifies that all characters from the input array have been processed. The machine stops here.',
    },
  },
});
