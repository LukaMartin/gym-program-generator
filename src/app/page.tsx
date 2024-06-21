import H1 from "@/components/H1";
import TrainingProgramContainer from "../components/TrainingProgramContainer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <H1 className="text-center text-[17px] xs:text-xl">
        CREATE YOUR TRAINING PROGRAM
      </H1>
      <p className="max-w-[70%] md:max-w-full text-center text-sm md:text-base italic text-white/75">
        Fill the form below to create your training program
      </p>

      <TrainingProgramContainer />
    </main>
  );
}
