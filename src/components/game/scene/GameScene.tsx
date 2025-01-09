'use client';

import { Button } from '@/components/ui/button';
import { DifficultyLevelSelector, KeyboardInput } from '@/components/game';
import { HStack, VStack } from '@/styled-system/jsx';
import { useMachine } from '@xstate/react';
import { createBrowserInspector } from '@statelyai/inspect';
import { Text } from '@/components/ui/text';
import { fromPromise } from 'xstate';
import { GameDifficulty, gameStateMachine, generateSequence, initializeGame } from '@/models';
import { Badge } from '@/components/ui/badge';
import { match } from 'ts-pattern';
import { Fragment } from 'react';

const { inspect } = createBrowserInspector({
  // TODO AR Comment out the line below to start the inspector
  // autoStart: false,
});

export const GameScene = () => {
  const [state, send] = useMachine(
    gameStateMachine.provide({
      actors: {
        gameInitActor: fromPromise(initializeGame),
        gameSequenceGenerationActor: fromPromise(generateSequence),
      },
    }),
    { inspect }
  );

  return (
    <VStack flexWrap='wrap'>
      <Text>{state.value}</Text>
      {match(state.value)
        .with('playingRound', () => {
          return (
            <Fragment>
              <Badge size='lg'>{`Level: ${state.context.currentLevel}, Round: ${state.context.currentRound}`}</Badge>
              <HStack>
                <Button
                  variant='solid'
                  size='lg'
                  // loading={state.matches('initializing')}
                  // disabled={!state.matches('waitingForRoundStart')}
                  // onClick={() => send({ type: 'startRound' })}
                >
                  Repeat the sequence
                </Button>
                <Button
                  variant='solid'
                  size='lg'
                  // loading={state.matches('initializing')}
                  disabled={state.matches('typingSimulation')}
                  // onClick={() => send({ type: 'startRound' })}
                >
                  New Game
                </Button>
              </HStack>
            </Fragment>
          );
        })
        .otherwise(() => (
          <Fragment>
            <Button
              variant='solid'
              size='lg'
              loading={state.matches('initializing')}
              disabled={!state.matches('waitingForRoundStart')}
              onClick={() => send({ type: 'startRound' })}
              // TODO AR :
              //  - Only after clicking the “Start” button is the first sequence shown by simulating the typing of the corresponding symbols on the virtual keyboard.
              //  - The typing simulation should be clear: the symbols are “typed” one after another, and the corresponding keys are highlighted.
              // TODO AR :
              //  - The user can click the “Repeat the sequence” button only once per round.
              //  - After that, the “Repeat the sequence” button becomes disabled until the next round (if the user successfully completes the current round).
            >
              Start
            </Button>
            <DifficultyLevelSelector
              disabled={state.matches('playingRound')}
              currentLevel={state.context.currentLevel}
              onSelect={(difficultyLevel) => {
                send({ type: 'setLevel', params: { level: difficultyLevel } });
              }}
            />
          </Fragment>
        ))}

      <KeyboardInput
        showNumbers={GameDifficulty.usingNumbers(state.context.currentLevel)}
        showLetters={GameDifficulty.usingLetters(state.context.currentLevel)}
        disabled={!state.matches('playingRound')}
      />
    </VStack>
  );
};
