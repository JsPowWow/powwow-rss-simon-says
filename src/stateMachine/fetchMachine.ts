import { assign, createMachine } from 'xstate';

export const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'idle',
  context: {
    data: undefined,
    error: undefined,
  } as {
    data: unknown;
    error: unknown;
  },
  states: {
    idle: {
      on: { FETCH: 'loading' },
    },
    loading: {
      invoke: {
        src: 'fetchData',
        onDone: {
          target: 'success',
          actions: assign({
            data: ({ event }) => event.output,
          }),
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: ({ event }) => event.error,
          }),
        },
      },
    },
    success: {
      entry: 'notifySuccess',
      type: 'final',
    },
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});
