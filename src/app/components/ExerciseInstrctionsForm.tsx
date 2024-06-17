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
        className="rounded-lg outline-none ring-light-red focus:ring-2 text-black mt-2 mb-4 px-1 md:px-2 md:py-[0.125rem]"
        type="text"
        placeholder="Exercise name..."
        name="search-text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
      />
      <button
        type="submit"
        className={clsx(
          "md:text-xl mt-2 p-1 border-2 border-white rounded-lg hover:bg-blue",
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
        className="md:text-xl mt-2 p-1 border-2 border-white rounded-lg hover:bg-blue"
        onClick={() => {
          setSearchText("");
          setExerciseInstructions(null);
        }}
      >
        Clear
      </button>
    </form>
  );
}
