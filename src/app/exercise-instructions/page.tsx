import ExerciseInstructionsContainer from "../components/ExerciseInstructionsContainer";


export default function ExerciseExamples() {
  return (
    <main className="flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-6">Exercise Instructions</h2>
      <p className="pb-6 px-4 text-center text-base">Use the input below to get detailed instructions on the exercises in your training program</p>

      <ExerciseInstructionsContainer />
    </main>
  )
}
