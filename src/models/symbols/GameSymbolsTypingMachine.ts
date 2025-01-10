import { assign, not, raise, setup } from 'xstate';

export type SymbolsTypingContext = {
  delay: number;
  characters: string[];
  currentIndex: number;
};

export const gameSymbolsTypingMachine = setup({
  types: {
    input: {} as Pick<SymbolsTypingContext, 'characters' | 'delay'>,
    context: {} as SymbolsTypingContext,
    events: {} as { type: 'press' },
  },
  actions: {
    logCurrentSymbol: ({ context, event, self }) => {
      // emit({ type: 'notification', currentChar: context.characters[context.currentIndex] });
      // TODO AR del this
      console.log({
        self,
        event: event.type,
        currentChar: context.characters[context.currentIndex],
      });
    },
  },
  guards: {
    hasNext: ({ context }: { context: SymbolsTypingContext }) =>
      Boolean(context.characters.length && context.currentIndex < context.characters.length),
  },
}).createMachine({
  context: ({ input }) => ({
    characters: input.characters,
    delay: input.delay,
    currentIndex: 0,
  }),
  id: 'typingMachine',
  initial: 'typing',
  states: {
    typing: {
      on: {
        press: [
          {
            reenter: true,
            target: 'typing',
            guard: 'hasNext',
          },
          {
            target: 'completed',
            guard: not('hasNext'),
          },
        ],
      },
      entry: [
        'logCurrentSymbol',
        assign(({ context }) => ({
          currentIndex: context.currentIndex + 1,
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
