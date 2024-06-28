import { TrainingProgramFormProps } from "../lib/types";
import { clsx } from "clsx";

const inputStyles =
  "appearance-none w-60 md:w-72 outline-none rounded-md ring-gray-400 focus:ring-2 mt-2 mb-8 pl-2 py-[0.5rem]";

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
    <section
      className={`flex flex-col mt-20 bg-[#e1e2e6] text-black rounded-xl`}
    >
      <div className="bg-light-red h-16 md:h-20 rounded-t-xl"></div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-4 px-8 md:px-10"
      >
        <label className="font-semibold text-xl" htmlFor="days-per-week">
          Sessions
        </label>
        <input
          onChange={(e) => setTrainingDays(e.target.value)}
          value={trainingDays}
          className={inputStyles}
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
        <label className="font-semibold text-xl" htmlFor="session-time">
          Time
        </label>
        <input
          onChange={(e) => setSessionTime(e.target.value)}
          value={sessionTime}
          className={inputStyles}
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
        <label className="font-semibold text-xl" htmlFor="training-goal">
          Goal
        </label>
        <select
          onChange={(e) => setGoalOption(e.target.value)}
          className="appearance-none outline-none rounded-md text-gray-400 focus:text-gray-900 bg-white  ring-gray-400 focus:ring-2 mt-2 mb-8 pl-2 py-[0.5rem] down-arrow"
          id="training-goal"
          name="training-goal"
          defaultValue={""}
          required
        >
          <option value="" disabled>
            Choose your goal...
          </option>
          <option value="muscle growth">Muscle Growth</option>
          <option value="increase strength">Increase Strength</option>
          <option value="HIIT">Cardiovascular Fitness</option>
          <option value="improved flexibility">Improved Flexibility</option>
          <option value="calisthenics training">Calisthenics Training</option>
        </select>
        <button
          className={clsx(
            "text-white text-lg md:text-xl py-2 rounded-md transition active:scale-[0.95]",
            {
              "bg-gray-500": isLoading,
              "bg-navy hover:bg-blue": !isLoading,
            }
          )}
          type="submit"
        >
          {isLoading ? "Generating program..." : "Submit"}
        </button>
        <button
          className="text-white bg-light-red text-lg md:text-xl mt-2 mb-6 py-2 rounded-md hover:bg-[#F58080] transition active:scale-[0.95]"
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
