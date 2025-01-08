import { Button } from '@/components/ui/button';
import { Container, VStack } from '@/styled-system/jsx';
import { VirtualKeyboard, DifficultyLevelSelector } from '@/components/game/';

export default function Home() {
  return (
    <main>
      <Container py={{ base: '12', md: '16' }} maxW='2xl'>
        <VStack flexWrap='wrap'>
          <Button variant='solid' size='2xl'>
            Start
          </Button>
          <DifficultyLevelSelector />
          <VirtualKeyboard />
        </VStack>
      </Container>
    </main>
  );
}
