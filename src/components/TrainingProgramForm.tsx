import { Poppins } from "next/font/google";
import { TrainingProgramFormProps } from "../lib/types";
import { clsx } from "clsx";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function TrainingProgramForm({
  trainingDays,
  setTrainingDays,
  sessionTime,
  setSessionTime,
  setGoalOption,
  setTrainingProgram,
  handleSubmit,
  isLoading,
}: TrainingProgramFormProps) {
  return (
    <section className={`${poppins.className} flex flex-col mt-20 bg-white text-black rounded-xl`}>
      <div className="bg-light-red h-16 md:h-20 rounded-t-xl"></div>
      <form onSubmit={handleSubmit} className="flex flex-col py-4 px-6 md:px-8">
        <label className="font-semibold md:text-xl" htmlFor="days-per-week">
          Sessions
        </label>
        <input
          onChange={(e) => setTrainingDays(e.target.value)}
          value={trainingDays}
          className="w-60 md:w-72 outline-none ring-navy focus:ring-2 border-2 border-black/20 mt-2 mb-8 px-1 md:px-2 py-[0.25rem] appearance-none"
          type="text"
          id="days-per-week"
          name="days-per-week"
          maxLength={1}
          pattern="[1-7]+"
          title="Choose a number between 1 and 7."
          placeholder="No. of sessions per week..."
          autoComplete="off"
          required
        />
        <label className="font-semibold md:text-xl" htmlFor="session-time">
          Time
        </label>
        <input
          onChange={(e) => setSessionTime(e.target.value)}
          value={sessionTime}
          className="appearance-none w-60 md:w-72 outline-none ring-navy focus:ring-2 border-2 border-black/20 mt-2 mb-8 px-1 md:px-2 py-[0.25rem]"
          type="text"
          id="session-time"
          name="session-time"
          maxLength={3}
          pattern="[0-9]+"
          title="Only enter numbers."
          placeholder="Time per session (mins)..."
          autoComplete="off"
          required
        />
        <label className="font-semibold md:text-xl" htmlFor="training-goal">
          Goal
        </label>
        <select
          onChange={(e) => setGoalOption(e.target.value)}
          className="bg-gray-50 border-2 border-black/20 text-gray-900  ring-navy focus:ring-2 focus:border-blue-500 block mt-2 mb-8 px-1 md:px-2 py-[0.25rem]"
          id="training-goal"
          name="training-goal"
          defaultValue={""}
          required
        >
          <option value="" className="flex justify-between" disabled>
            Choose your goal
          </option>
          <option value="muscle growth">
            Muscle Growth
          </option>
          <option value="increase strength">
            Increase Strength
          </option>
          <option value="HIIT">
            Cardiovascular Fitness
          </option>
          <option value="improved flexibility">
            Improved Flexibility
          </option>
          <option value="calisthenics training">
            Calisthenics Training
          </option>
        </select>
        <button
          className={clsx(
            "text-white md:text-xl p-1 hover:bg-blue button-effects",
            {
              "bg-blue": isLoading,
              "bg-navy": !isLoading,
            }
          )}
          type="submit"
        >
          Submit
        </button>
        <button
          className="text-white bg-light-red md:text-xl mt-2 mb-6 p-1 hover:bg-[#F58080] button-effects"
          type="reset"
          onClick={() => {
            setTrainingDays("");
            setSessionTime("");
            setTrainingProgram(null);
            localStorage.removeItem("training_program");
          }}
        >
          Clear
        </button>
      </form>
    </section>
  );
}
