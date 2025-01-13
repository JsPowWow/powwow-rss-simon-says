import { Button } from '@/components/ui/button';
import { HStack, VStack } from '@/styled-system/jsx';
import { GameSymbols } from '@/models';
import { noop } from '@/shared/utils';

interface KeyboardInputProps {
  showNumbers: boolean;
  showLetters: boolean;
  disabled?: boolean;
  highlight?: string[];
  onKey: (key: string) => void;
}

export const KeyboardInput = ({
  showLetters,
  showNumbers,
  disabled = false,
  highlight = [],
  onKey = noop,
}: KeyboardInputProps) => {
  const handleOnClick = (key: string) => {
    onKey(key);
  };
  return (
    <VStack>
      {showNumbers && (
        <HStack flexWrap='wrap' justifyContent='center'>
          {GameSymbols.numbers.map((key, index) => (
            <Button key={index} disabled={disabled} onClick={() => handleOnClick(key)}>
              {key}
            </Button>
          ))}
        </HStack>
      )}
      {showLetters && (
        <HStack flexWrap='wrap' justifyContent='center'>
          {GameSymbols.letters.map((key, index) => (
            <Button
              background={highlight?.includes(key) ? 'colorPalette.a12' : 'colorPalette.default'}
              key={index}
              disabled={disabled}
              onClick={() => handleOnClick(key)}
            >
              {key.toString().toUpperCase()}
            </Button>
          ))}
        </HStack>
      )}
    </VStack>
  );
};
