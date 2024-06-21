import H1 from "@/components/H1";
import ExerciseInstructionsContainer from "../../components/ExerciseInstructionsContainer";

export default function ExerciseExamples() {
  return (
    <main className="flex flex-col items-center">
      <H1 className="text-2xl">Exercise Instructions</H1>
      <p className="mb-20 px-4 text-center text-base text-white/75 italic">
        Use the search below to get detailed instructions on the exercises in
        your training program
      </p>

      <ExerciseInstructionsContainer />
    </main>
  );
}
