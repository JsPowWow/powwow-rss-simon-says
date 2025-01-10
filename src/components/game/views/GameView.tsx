'use client';

import { Button } from '@/components/ui/button';
import { KeyboardInput } from '../parts/KeyboardInput';
import { DifficultyLevelSelector } from '../parts/DifficultyLevelSelector';
import { HStack, VStack } from '@/styled-system/jsx';
import { Text } from '@/components/ui/text';
import { GameDifficulty } from '@/models';
import { Badge } from '@/components/ui/badge';
import { match } from 'ts-pattern';
import { GameStateContext } from '../GameStateContext';
import { identity } from '@/shared/utils';

export const GameView = () => {
  const game = GameStateContext.useActorRef();
  const state = GameStateContext.useSelector(identity);

  return (
    <VStack flexWrap='wrap'>
      <Text>{state.value}</Text>
      {match(state.value)
        .with('playingRound', () => {
          return (
            <VStack minH='28' justifyContent='end'>
              <Badge
                variant='solid'
                size='lg'
              >{`Level: ${state.context.currentLevel}, Round: ${state.context.currentRound}`}</Badge>
              <HStack>
                <Button
                  variant='solid'
                  size='md'
                  // loading={state.matches('initializing')}
                  // disabled={!state.matches('waitingForRoundStart')}
                  onClick={() => game.send({ type: 'repeatSequence' })}
                  // TODO AR :
                  //  - The user can click the “Repeat the sequence” button only once per round.
                  //  - After that, the “Repeat the sequence” button becomes disabled until the next round (if the user successfully completes the current round).
                >
                  Repeat the sequence
                </Button>
                <Button
                  variant='solid'
                  size='md'
                  disabled={state.matches('typingSimulation')}
                  onClick={() => game.send({ type: 'newGame' })}
                >
                  New Game
                </Button>
              </HStack>
            </VStack>
          );
        })
        .otherwise(() => (
          <VStack minH='28' justifyContent='end'>
            <Button
              variant='solid'
              size='lg'
              loading={state.hasTag('processing')}
              disabled={!state.matches('waitingForRoundStart')}
              onClick={() => game.send({ type: 'startRound' })}
              // TODO AR :
              //  - Only after clicking the “Start” button is the first sequence shown by simulating the typing of the corresponding symbols on the virtual keyboard.
              //  - The typing simulation should be clear: the symbols are “typed” one after another, and the corresponding keys are highlighted.
            >
              Start
            </Button>
            <DifficultyLevelSelector
              disabled={state.matches('playingRound')}
              currentLevel={state.context.currentLevel}
              onSelect={(difficultyLevel) => {
                game.send({ type: 'updateLevel', params: { level: difficultyLevel } });
              }}
            />
          </VStack>
        ))}

      <KeyboardInput
        showNumbers={GameDifficulty.usingNumbers(state.context.currentLevel)}
        showLetters={GameDifficulty.usingLetters(state.context.currentLevel)}
        disabled={!state.matches('playingRound')}
      />
    </VStack>
  );
};
