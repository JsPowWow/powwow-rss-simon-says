export const difficultyLevelVariants = Object.freeze(['Easy', 'Medium', 'Hard'] as const);

export type DifficultyLevel = (typeof difficultyLevelVariants)[number];
