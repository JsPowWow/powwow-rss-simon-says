'use client';

import { Button } from '@/components/ui/button';
import { KeyboardInput } from '../parts/KeyboardInput';
import { DifficultyLevelSelector } from '../parts/DifficultyLevelSelector';
import { HStack, VStack } from '@/styled-system/jsx';
import { Text } from '@/components/ui/text';
import { GameContext, GameDifficulty } from '@/models';
import { Badge } from '@/components/ui/badge';
import { match, P } from 'ts-pattern';
import { GameStateContext } from '../GameStateContext';
import { identity } from '@/shared/utils';
import React, { Fragment, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

export const GameView = () => {
  const game = GameStateContext.useActorRef();
  const state = GameStateContext.useSelector(identity);

  const [symbols, setSymbols] = useState<GameContext['sequence']>([]);

  useEffect(() => {
    const subscription = game.on('simulateTypeSymbol', (event) => {
      setSymbols((prev) => [...prev, event.symbol]);
    });
    return subscription.unsubscribe;
  }, [game, state]);

  useEffect(() => {
    const subscription = game.on('simulateTypeSymbolDone', (_event) => {
      console.log('~~ cheat', game.getSnapshot().context.sequence.join(','));
      setSymbols([]);
    });
    return subscription.unsubscribe;
  }, [game, state]);

  return (
    <VStack flexWrap='wrap'>
      <Text>{`${state.value} ${symbols.join()}`}</Text>
      <VStack minH='28' justifyContent='start'>
        {match(state.value)
          .with('waitingForGameStart', () => {
            return (
              <HStack>
                <Button
                  variant='solid'
                  size='lg'
                  loading={state.hasTag('processing')}
                  disabled={!state.matches('waitingForGameStart')}
                  onClick={() => game.send({ type: 'startRound' })}
                >
                  Start
                </Button>
                <DifficultyLevelSelector
                  disabled={!state.matches('waitingForGameStart')}
                  currentLevel={state.context.currentLevel}
                  onSelect={(difficultyLevel) => {
                    game.send({ type: 'updateLevel', params: { level: difficultyLevel } });
                  }}
                />
              </HStack>
            );
          })
          .with(P.union('generatingSequence', 'typingSimulation'), () => {
            return (
              <VStack>
                <HStack>
                  <Button variant='solid' size='md' disabled onClick={() => game.send({ type: 'repeatSequence' })}>
                    Repeat Round
                  </Button>
                  <Button variant='solid' size='md' disabled onClick={() => game.send({ type: 'newGame' })}>
                    New Game
                  </Button>
                  <Badge minW='50' variant='solid' size='xl'>{`Level: ${state.context.currentLevel}`}</Badge>
                  <Badge minW='50' variant='solid' size='xl'>{`Round: ${state.context.currentRound}`}</Badge>
                </HStack>
                <Input readOnly value={symbols.join(',')} />
              </VStack>
            );
          })
          .with(P.union('playingRound', 'roundFailure'), () => {
            return (
              <VStack>
                <HStack>
                  <Button
                    variant='solid'
                    size='md'
                    disabled={!state.can({ type: 'repeatSequence' })}
                    onClick={() => game.send({ type: 'repeatSequence' })}
                  >
                    Repeat Round
                  </Button>
                  <Button
                    variant='solid'
                    size='md'
                    disabled={state.matches('typingSimulation')}
                    onClick={() => game.send({ type: 'newGame' })}
                  >
                    New Game
                  </Button>
                  <Badge minW='50' variant='solid' size='xl'>{`Level: ${state.context.currentLevel}`}</Badge>
                  <Badge minW='50' variant='solid' size='xl'>{`Round: ${state.context.currentRound}`}</Badge>
                </HStack>
                <Input readOnly value={state.context.inputSequence} />
              </VStack>
            );
          })
          .with('roundSuccess', () => {
            return (
              <VStack>
                <HStack>
                  <Button variant='solid' size='md' onClick={() => game.send({ type: 'startRound' })}>
                    Next Round
                  </Button>
                  <Button variant='solid' size='md' onClick={() => game.send({ type: 'newGame' })}>
                    New Game
                  </Button>
                  <Badge minW='50' variant='solid' size='xl'>{`Level: ${state.context.currentLevel}`}</Badge>
                  <Badge minW='50' variant='solid' size='xl'>{`Round: ${state.context.currentRound}`}</Badge>
                </HStack>
                <Input readOnly value={state.context.inputSequence} />
              </VStack>
            );
          })
          .otherwise(() => (
            <Fragment>
              <Button
                variant='solid'
                size='lg'
                loading={state.hasTag('processing')}
                disabled={!state.matches('waitingForGameStart')}
                onClick={() => game.send({ type: 'startRound' })}
              >
                Start
              </Button>
            </Fragment>
          ))}

        <KeyboardInput
          showNumbers={GameDifficulty.usingNumbers(state.context.currentLevel)}
          showLetters={GameDifficulty.usingLetters(state.context.currentLevel)}
          highlight={symbols}
          disabled={!state.matches('playingRound')}
          onKey={(key) => {
            game.send({ type: 'inputSymbol', params: { character: key } });
          }}
        />
      </VStack>
    </VStack>
  );
};
