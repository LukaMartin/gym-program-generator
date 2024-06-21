import { ExerciseInstructionsFormProps } from "../lib/types";


export default function ExerciseInstrctionsForm({
  searchText,
  setSearchText,
  handleSubmit,
}: ExerciseInstructionsFormProps) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col xs:items-center">
      <input
        className="rounded-sm outline-none ring-light-red focus:ring-2 bg-white/5 border-2 border-white/20 w-64 xs:w-80 md:w-[450px] h-14 mt-2 mb-4 px-4 py-1"
        type="text"
        placeholder="Exercise name..."
        name="search-text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        autoComplete="off"
        required
      />
    </form>
  );
}
