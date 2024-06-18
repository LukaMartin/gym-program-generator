import { useEffect, useState } from "react";
import { TExerciseInstructions } from "../lib/types";

export default function useGetExerciseInstructions(searchText: string) {
  const [exerciseInstructions, setExerciseInstructions] = useState<
    TExerciseInstructions[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedExerciseInstructions = localStorage.getItem(
        "exercise_instructions"
      );
      if (storedExerciseInstructions) {
        const instructions = JSON.parse(storedExerciseInstructions);
        setExerciseInstructions(instructions);
      }
    }
  }, []);

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
    localStorage.setItem(
      "exercise_instructions",
      JSON.stringify(jsonData.instructions)
    );
  };

  return {
    exerciseInstructions,
    setExerciseInstructions,
    isLoading,
    getTrainingProgram,
  };
}
