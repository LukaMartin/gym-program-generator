import { useState } from "react";
import { TTrainingProgram } from "../lib/types";

export default function useGetTrainingProgram(
  trainingDays: string,
  trainingGoal: string
) {
  const [trainingProgram, setTrainingProgram] = useState<TTrainingProgram[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getTrainingProgram = async () => {
    if (!trainingDays || !trainingGoal) {
      return;
    }

    setIsLoading(true);

    const response = await fetch("/api/openai/training-program", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trainingDays: trainingDays,
        trainingGoal: trainingGoal,
      }),
    });

    const data = await response.json();

    const jsonData = JSON.parse(data.data);
    setTrainingProgram(jsonData.training_program);
    setIsLoading(false);
  };

  return { trainingProgram, setTrainingProgram, isLoading, getTrainingProgram };
}
