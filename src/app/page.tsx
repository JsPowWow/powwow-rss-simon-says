import { Container } from '@/styled-system/jsx';
import { Game } from '@/components/game/';

export default function Home() {
  return (
    <main>
      <Container py={{ base: '12', md: '16' }} maxW='2xl'>
        <Game />
      </Container>
    </main>
  );
}
