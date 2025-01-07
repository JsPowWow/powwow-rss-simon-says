import { RadioButtonGroup } from '@/components/ui/radio-button-group';
import { DifficultyLevelDefaultValue, DifficultyLevelVariants } from '@/models';

const options = DifficultyLevelVariants.map((option) => ({
  value: option,
  label: option,
}));

export const DifficultyLevelSelector = () => {
  return (
    <RadioButtonGroup.Root defaultValue={DifficultyLevelDefaultValue}>
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
