import { TrainingTableProps } from "../lib/types";
import LoadingBar from "./LoadingBar";

export default function TrainingProgramTable({
  trainingProgram,
  isLoading,
}: TrainingTableProps) {
  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <section className="my-20">
          <table className="bg-blue border-2 border-white text-sm md:text-base">
            {trainingProgram && (
              <thead>
                <tr>
                  <th className="px-[0.4rem] md:px-4 py-[0.375rem] text-left">
                    DAY
                  </th>
                  <th className="px-[0.4rem] md:px-4 py-[0.375rem] text-left hidden md:table-cell">
                    TARGET MUSCLE
                  </th>
                  <th className="px-[0.4rem] md:px-4 py-[0.375rem] text-left">
                    EXERCISE
                  </th>
                  <th className="px-[0.4rem] md:px-4 py-[0.375rem] text-left">
                    SETS
                  </th>
                  <th className="px-[0.4rem] md:px-4 py-[0.375rem] text-left">
                    REPS
                  </th>
                  <th className="px-[0.4rem] md:px-4 py-[0.375rem] text-right">
                    REST
                  </th>
                </tr>
              </thead>
            )}
            <tbody>
              {trainingProgram?.map((exercise) => {
                return (
                  <tr key={exercise.id} className="border-t-2 border-t-white">
                    <td className="px-[0.4rem] md:px-4 py-[0.375rem]">
                      <p>{exercise.training_day_number}</p>
                    </td>
                    <td className="px-[0.4rem] md:px-4 py-[0.375rem] hidden md:table-cell">
                      <p>{exercise.target_muscle_group}</p>
                    </td>
                    <td className="px-[0.4rem] md:px-4 py-[0.375rem]">
                      <p>{exercise.exercise_name}</p>
                    </td>
                    <td className="px-[0.4rem] md:px-4 py-[0.375rem]">
                      <p>{exercise.sets}</p>
                    </td>
                    <td className="px-[0.4rem] md:px-4 py-[0.375rem]">
                      <p>{exercise.reps}</p>
                    </td>
                    <td className="px-[0.4rem] md:px-4 py-[0.375rem] text-right">
                      <p>
                        {exercise.rest}
                        <span className="italic">s</span>
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
