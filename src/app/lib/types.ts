export type TrainingProgramFormProps = {
  trainingDays: string;
  setTrainingDays: (day: string) => void;
  sessionTime: string;
  setSessionTime: (time: string) => void;
  setGoalOption: (goal: string) => void;
  setTrainingProgram: (program: TTrainingProgram[] | null) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export type TTrainingProgram = {
  id: number;
  training_day_number: number;
  target_muscle_group: string;
  exercise_name: string;
  sets: number;
  reps: number;
  rest: number;
};

export type TrainingTableProps = {
  trainingProgram: TTrainingProgram[] | null;
  isLoading: boolean;
};

export type ExerciseInstructionsFormProps = {
  isLoading: boolean;
  searchText: string;
  setSearchText: (exercise: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setExerciseInstructions: (instructions: TExerciseInstructions[] | null) => void;
};

export type TExerciseInstructions = {
  setup: string;
  initial_position: string;
  movement: string;
  breathing: string;
  common_mistakes: string;
};

export type ExerciseInstructionsProps = {
  exerciseInstructions: TExerciseInstructions[] | null;
};

export type ContainerProps = {
  children: React.ReactNode;
};
