import { useEffect, useState } from "react";
import { TExerciseInstructions } from "../lib/types";

export default function useGetExerciseInstructions(searchText: string) {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("exercise_instructions") || "null")
  const [exerciseInstructions, setExerciseInstructions] = useState<TExerciseInstructions[] | null>(itemsFromLocalStorage || null);
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

  useEffect(() => {
    localStorage.setItem("exercise_instructions", JSON.stringify(exerciseInstructions))
  }, [exerciseInstructions])

  return { exerciseInstructions, setExerciseInstructions, isLoading, getTrainingProgram };
}
