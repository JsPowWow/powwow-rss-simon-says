export const DifficultyLevelVariants = Object.freeze(['Easy', 'Medium', 'Hard'] as const);

export type DifficultyLevel = (typeof DifficultyLevelVariants)[number];

export const DifficultyLevelDefaultValue: DifficultyLevel = 'Medium';
