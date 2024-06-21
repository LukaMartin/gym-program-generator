import TrainingProgramContainer from "../components/TrainingProgramContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center text-[17px] xs:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold pb-2">
        CREATE YOUR TRAINING PROGRAM
      </h1>
      <p className="max-w-[70%] md:max-w-full text-center text-sm md:text-base italic text-white/75">Fill the form below to create your training program</p>

      <TrainingProgramContainer />
    </main>
  );
}
