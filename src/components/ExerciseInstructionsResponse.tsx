import { ExerciseInstructionsProps } from "../lib/types";

export default function ExerciseInstructionsResponse({
  exerciseInstructions,
}: ExerciseInstructionsProps) {
  return (
    <>
      {exerciseInstructions?.map((instruction) => {
        return (
          <section
            key={instruction.setup}
            className="px-4 md:px-8 lg:px-40 xl:px-64 py-12"
          >
            <h4 className="md:text-lg font-semibold pb-2 pt-4">Setup</h4>
            <p className="text-sm md:text-base">{instruction.setup}</p>
            <h4 className="md:text-lg font-semibold pb-4 pt-4">
              Initial Position
            </h4>
            <p className="text-sm md:text-base">
              {instruction.initial_position}
            </p>
            <h4 className="md:text-lg font-semibold pb-4 pt-4">Movement</h4>
            <p className="text-sm md:text-base">{instruction.movement}</p>
            <h4 className="md:text-lg font-semibold pb-4 pt-4">Breathing</h4>
            <p className="text-sm md:text-base">{instruction.breathing}</p>
            <h4 className="md:text-lg font-semibold pb-4 pt-4">
              Common Mistakes
            </h4>
            <p className="text-sm md:text-base">
              {instruction.common_mistakes}
            </p>
          </section>
        );
      })}
    </>
  );
}
