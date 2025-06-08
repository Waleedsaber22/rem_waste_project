import { useReducer } from "react";
import { StepContext } from "./StepContext";
import { stepReducer, initialStepState } from "./StepReducer";

export const StepProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stepReducer, initialStepState);

  const setStepData = (key, value) =>
    dispatch({ type: "SET_DATA", payload: { key, value } });

  const value = {
    getCurrentStep() {
      return state.steps[state.currentStepKey];
    },
    next: () => dispatch({ type: "NEXT" }),
    prev: () => dispatch({ type: "PREV" }),
    setCurrentStep: (key) => dispatch({ type: "SET_STEP", payload: key }),
    setStepData,
    reset: () => dispatch({ type: "RESET" }),
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
