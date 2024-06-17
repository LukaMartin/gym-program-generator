import { useState } from "react";
import { TExerciseInstructions } from "../lib/types";

export default function useGetExerciseInstructions(searchText: string) {
  const [exerciseInstructions, setExerciseInstructions] = useState<TExerciseInstructions[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const getTrainingProgram = async () => {
    if (!searchText) {
      return;
    }

    setIsLoading(true);

    const response = await fetch("/api/openai/exercise-instructions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchText: searchText,
      }),
    });

    const data = await response.json();

    const jsonData = JSON.parse(data.data.content);
    setExerciseInstructions(jsonData.instructions);
    setIsLoading(false);
  };

  return { exerciseInstructions, setExerciseInstructions, isLoading, getTrainingProgram };
}
