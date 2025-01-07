import { Characters, Numbers } from '@/models';
import { Button } from '@/components/ui/button';
import { HStack, VStack } from '@/styled-system/jsx';

export const VirtualKeyboard = () => {
  return (
    <VStack>
      <HStack flexWrap='wrap' justifyContent='center'>
        {Numbers.map((key, index) => (
          <Button key={index}>{key}</Button>
        ))}
      </HStack>
      <HStack flexWrap='wrap' justifyContent='center'>
        {Characters.map((key, index) => (
          <Button key={index}>{key.toString().toUpperCase()}</Button>
        ))}
      </HStack>
    </VStack>
  );
};
