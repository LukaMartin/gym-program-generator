import TrainingProgramContainer from "./components/TrainingProgramContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-6">
        CREATE YOUR TRAINING PROGRAM
      </h1>

      <TrainingProgramContainer />
    </main>
  );
}
