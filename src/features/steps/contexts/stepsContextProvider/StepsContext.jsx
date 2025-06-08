import { createContext, useContext } from "react";

export const StepsContext = createContext();

export const useStepsContext = () => useContext(StepsContext);

export const useCurrentStep = () => {
  const { getCurrentStep } = useStepsContext();
  return getCurrentStep();
};
