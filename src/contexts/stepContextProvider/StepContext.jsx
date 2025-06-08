import { createContext, useContext } from "react";

export const StepContext = createContext();

export const useStepContext = () => useContext(StepContext);

export const useCurrentStep = () => {
  const { getCurrentStep } = useStepContext();
  return getCurrentStep();
};
