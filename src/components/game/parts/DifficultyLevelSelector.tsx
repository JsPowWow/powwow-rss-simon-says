import { RadioButtonGroup } from '@/components/ui/radio-button-group';
import { DifficultyLevel, difficultyLevelVariants } from '@/models';

const options = difficultyLevelVariants.map((option) => ({
  value: option,
  label: option,
}));

interface DifficultyLevelSelectorProps {
  currentLevel: DifficultyLevel;
}

export const DifficultyLevelSelector = ({ currentLevel }: DifficultyLevelSelectorProps) => {
  return (
    <RadioButtonGroup.Root value={currentLevel}>
      {options.map(({ value, label }) => (
        <RadioButtonGroup.Item key={value} value={value} px='0'>
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText>{label}</RadioButtonGroup.ItemText>
          <RadioButtonGroup.ItemHiddenInput />
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  );
};
