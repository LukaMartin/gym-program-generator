"use client";

import { useEffect, useState } from "react";
import ExerciseInstrctionsForm from "./ExerciseInstrctionsForm";
import useGetExerciseInstructions from "../hooks/useGetExerciseInstructrions";
import LoadingBar from "./LoadingBar";
import ExerciseInstructionsResponse from "./ExerciseInstructionsResponse";

export default function ExerciseInstructionsContainer() {
  const [searchText, setSearchText] = useState("");
  const {
    exerciseInstructions,
    setExerciseInstructions,
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
        setExerciseInstructions={setExerciseInstructions}
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
