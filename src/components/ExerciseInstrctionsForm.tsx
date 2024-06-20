import clsx from "clsx";
import { ExerciseInstructionsFormProps } from "../lib/types";

export default function ExerciseInstrctionsForm({
  isLoading,
  searchText,
  setSearchText,
  handleSubmit,
  setExerciseInstructions,
}: ExerciseInstructionsFormProps) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        className="rounded-lg outline-none ring-white focus:ring-2 bg-white/5 border-2 border-white/20 mt-2 mb-4 px-1 md:px-2 py-1"
        type="text"
        placeholder="Exercise name..."
        name="search-text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        autoComplete="off"
        required
      />
      <button
        type="submit"
        className={clsx(
          "md:text-xl mt-2 p-1 border-2 border-white rounded-lg hover:bg-blue button-effects",
          {
            "bg-blue": isLoading,
            "bg-navy": !isLoading,
          }
        )}
      >
        Submit
      </button>
      <button
        type="button"
        className="md:text-xl mt-2 p-1 border-2 border-white rounded-lg hover:bg-blue button-effects"
        onClick={() => {
          setSearchText("");
          setExerciseInstructions(null);
          localStorage.removeItem("exercise_instructions");
        }}
      >
        Clear
      </button>
    </form>
  );
}
