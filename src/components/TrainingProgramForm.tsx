import { TrainingProgramFormProps } from "../lib/types";
import { clsx } from "clsx";

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
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="md:text-xl text-center" htmlFor="days-per-week">
        Training days per week
      </label>
      <input
        onChange={(e) => setTrainingDays(e.target.value)}
        value={trainingDays}
        className="rounded-lg outline-none ring-light-red focus:ring-2 text-black border-2 border-light-red mt-2 mb-4 px-1 md:px-2 md:py-[0.125rem]"
        type="text"
        id="days-per-week"
        name="days-per-week"
        maxLength={1}
        pattern="[1-7]+"
        title="Choose a number between 1 and 7."
        required
      />
      <label className="md:text-xl text-center" htmlFor="session-time">
        Time per session (mins)
      </label>
      <input
        onChange={(e) => setSessionTime(e.target.value)}
        value={sessionTime}
        className="rounded-lg outline-none ring-light-red focus:ring-2 text-black border-2 border-light-red mt-2 mb-4 px-1 md:px-2 md:py-[0.125rem]"
        type="text"
        id="session-time"
        name="session-time"
        maxLength={3}
        pattern="[0-9]+"
        title="Only enter numbers."
        required
      />
      <label className="md:text-xl text-center" htmlFor="training-goal">
        Training Goal
      </label>
      <select
        onChange={(e) => setGoalOption(e.target.value)}
        className="rounded-lg outline-none ring-light-red focus:ring-2 text-black border-2 border-light-red mt-2 mb-4 px-1 py-[0.125rem] md:px-2 md:py-1"
        id="training-goal"
        name="training-goal"
        defaultValue={""}
        required
      >
        <option value="" disabled>
          Choose your goal
        </option>
        <option value="muscle growth">Muscle Growth</option>
        <option value="increase strength">Increase Strength</option>
        <option value="HIIT">Cardiovascular Fitness</option>
        <option value="improved flexibility">Improved Flexibility</option>
        <option value="calisthenics training">Calisthenics Training</option>
      </select>
      <button
        className={clsx(
          "md:text-xl mt-2 p-1 border-2 border-white rounded-lg hover:bg-blue button-effects",
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
        className="md:text-xl mt-2 p-1 border-2 border-white rounded-lg hover:bg-blue button-effects"
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
  );
}
