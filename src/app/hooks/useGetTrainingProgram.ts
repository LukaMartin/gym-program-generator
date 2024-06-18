import { useEffect, useState } from "react";
import { TTrainingProgram } from "../lib/types";

export default function useGetTrainingProgram(
  trainingDays: string,
  sessionTime: string,
  trainingGoal: string
) {
  const [trainingProgram, setTrainingProgram] = useState<TTrainingProgram[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTrainingProgram = localStorage.getItem("training_program");
      if (storedTrainingProgram) {
        const program = JSON.parse(storedTrainingProgram);
        setTrainingProgram(program);
      }
    }
  }, []);

  const getTrainingProgram = async () => {
    if (!trainingDays || !sessionTime || !trainingGoal) {
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
        sessionTime: sessionTime,
        trainingGoal: trainingGoal,
      }),
    });

    const data = await response.json();

    const jsonData = JSON.parse(data.data);

    setTrainingProgram(jsonData.training_program);
    setIsLoading(false);
    localStorage.setItem("training_program", JSON.stringify(jsonData.training_program));
  };

  return { trainingProgram, setTrainingProgram, isLoading, getTrainingProgram };
}
