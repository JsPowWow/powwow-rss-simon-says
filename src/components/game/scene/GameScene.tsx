'use client';
import { gameStateMachine } from '@/stateMachine';
import { Button } from '@/components/ui/button';
import { DifficultyLevelSelector, VirtualKeyboard } from '@/components/game';
import { VStack } from '@/styled-system/jsx';
import { useActor } from '@xstate/react';
import { createBrowserInspector } from '@statelyai/inspect';
import { Text } from '@/components/ui/text';

const { inspect } = createBrowserInspector({
  // Comment out the line below to start the inspector
  // autoStart: false,
});

export const GameScene = () => {
  const [state, send] = useActor(gameStateMachine, { inspect });

  return (
    <VStack flexWrap='wrap'>
      <Text>{state.value}</Text>
      <Button
        variant='solid'
        size='2xl'
        loading={state.matches('initializing')}
        onClick={() => send({ type: 'startRound' })}
      >
        Start
      </Button>
      <DifficultyLevelSelector currentLevel={state.context.currentLevel} />
      <VirtualKeyboard />
    </VStack>
  );
};
