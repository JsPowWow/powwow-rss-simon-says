import { Letters, Numbers } from '@/models';
import { Button } from '@/components/ui/button';
import { HStack, VStack } from '@/styled-system/jsx';

interface KeyboardInputProps {
  showNumbers: boolean;
  showLetters: boolean;
  disabled?: boolean;
}

export const KeyboardInput = ({ showLetters, showNumbers, disabled = false }: KeyboardInputProps) => {
  return (
    <VStack>
      {showNumbers && (
        <HStack flexWrap='wrap' justifyContent='center'>
          {Numbers.map((key, index) => (
            <Button key={index} disabled={disabled}>
              {key}
            </Button>
          ))}
        </HStack>
      )}
      {showLetters && (
        <HStack flexWrap='wrap' justifyContent='center'>
          {Letters.map((key, index) => (
            <Button key={index} disabled={disabled}>
              {key.toString().toUpperCase()}
            </Button>
          ))}
        </HStack>
      )}
    </VStack>
  );
};
