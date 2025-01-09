'use client';

import { Button } from '@/components/ui/button';
import { DifficultyLevelSelector, KeyboardInput } from '@/components/game';
import { VStack } from '@/styled-system/jsx';
import { useMachine } from '@xstate/react';
import { createBrowserInspector } from '@statelyai/inspect';
import { Text } from '@/components/ui/text';
import { fromPromise } from 'xstate';
import { isMatching, P } from 'ts-pattern';
import { DifficultyLevel, gameStateMachine, generateSequence, initializeGame } from '@/models';

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
      <Button
        variant='solid'
        size='2xl'
        loading={state.matches('initializing')}
        disabled={!state.matches('waitingForRoundStart')}
        onClick={() => send({ type: 'startRound' })}
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
      <KeyboardInput
        showNumbers={isMatching(P.union(DifficultyLevel.Easy, DifficultyLevel.Hard), state.context.currentLevel)}
        showLetters={isMatching(P.union(DifficultyLevel.Medium, DifficultyLevel.Hard), state.context.currentLevel)}
        disabled={!state.matches('playingRound')}
      />
    </VStack>
  );
};
