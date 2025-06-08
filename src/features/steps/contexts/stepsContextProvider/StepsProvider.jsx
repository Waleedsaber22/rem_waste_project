import { useReducer } from "react";
import { StepsContext } from "./StepsContext";
import { stepsReducer, initialStepState } from "./StepsReducer";

export const StepsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stepsReducer, initialStepState);

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

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  );
};
