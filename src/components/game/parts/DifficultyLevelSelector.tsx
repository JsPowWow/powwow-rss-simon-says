import { RadioButtonGroup } from '@/components/ui/radio-button-group';
import { GameDifficulty, DifficultyLevel, gameDifficultyLevels } from '@/models';
import { match } from 'ts-pattern';
import { noop } from '@zag-js/utils';

const options = gameDifficultyLevels.map((option) => ({
  value: option,
  label: option,
}));

interface DifficultyLevelSelectorProps {
  currentLevel: DifficultyLevel;
  disabled?: boolean;
  reandonly?: boolean;
  onSelect?: (difficultyLevel: DifficultyLevel) => void;
}

export const DifficultyLevelSelector = ({
  currentLevel,
  disabled = false,
  onSelect = noop,
}: DifficultyLevelSelectorProps) => {
  return (
    <RadioButtonGroup.Root
      value={currentLevel}
      disabled={disabled}
      onValueChange={({ value }) => {
        match(value).when(GameDifficulty.isValid, onSelect).otherwise(noop);
      }}
    >
      {options.map(({ value, label }) => (
        <RadioButtonGroup.Item key={value} value={value} px='0'>
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText px={2}>{label}</RadioButtonGroup.ItemText>
          <RadioButtonGroup.ItemHiddenInput disabled={disabled} />
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  );
};
