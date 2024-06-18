"use client";

import { useState } from "react";
import useGetTrainingProgram from "../hooks/useGetTrainingProgram";
import TrainingProgramForm from "./TrainingProgramForm";
import TrainingProgramTable from "./TrainingProgramTable";

export default function TrainingProgramContainer() {
  const [trainingDays, setTrainingDays] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [goalOption, setGoalOption] = useState("");
  const { getTrainingProgram, isLoading, trainingProgram, setTrainingProgram } =
    useGetTrainingProgram(trainingDays, sessionTime, goalOption);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getTrainingProgram();
  };

  return (
    <>
      <TrainingProgramForm
        trainingDays={trainingDays}
        setTrainingDays={setTrainingDays}
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        setGoalOption={setGoalOption}
        setTrainingProgram={setTrainingProgram}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />

      <TrainingProgramTable
        trainingProgram={trainingProgram}
        isLoading={isLoading}
      />
    </>
  );
}
