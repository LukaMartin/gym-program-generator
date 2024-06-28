"use client";

import { useState } from "react";
import ExerciseInstrctionsForm from "./ExerciseInstrctionsForm";
import useGetExerciseInstructions from "../hooks/useGetExerciseInstructrions";
import ExerciseInstructionsResponse from "./ExerciseInstructionsResponse";
import SkeletonCard from "./SkeletonCard";

export default function ExerciseInstructionsContainer() {
  const [searchText, setSearchText] = useState("");
  const { exerciseInstructions, isLoading, getTrainingProgram } =
    useGetExerciseInstructions(searchText);

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
        <SkeletonCard />
      ) : (
        <ExerciseInstructionsResponse
          exerciseInstructions={exerciseInstructions}
        />
      )}
    </>
  );
}
