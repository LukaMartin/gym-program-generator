"use client";

import { useState } from "react";
import ExerciseInstrctionsForm from "./ExerciseInstrctionsForm";
import useGetExerciseInstructions from "../hooks/useGetExerciseInstructrions";
import LoadingBar from "./LoadingBar";
import ExerciseInstructionsResponse from "./ExerciseInstructionsResponse";

export default function ExerciseInstructionsContainer() {
  const [searchText, setSearchText] = useState("");
  const {
    exerciseInstructions,
    isLoading,
    getTrainingProgram,
  } = useGetExerciseInstructions(searchText);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getTrainingProgram();
  };

  return (
    <>
      <ExerciseInstrctionsForm
        searchText={searchText}
        setSearchText={setSearchText}
        handleSubmit={handleSubmit}
      />

      {isLoading ? (
        <LoadingBar />
      ) : (
        <ExerciseInstructionsResponse
          exerciseInstructions={exerciseInstructions}
        />
      )}
    </>
  );
}
