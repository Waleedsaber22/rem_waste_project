import { useMemo, useReducer } from "react";
import { StepsContext } from "./StepsContext";
import { stepsReducer, initialStepState } from "./StepsReducer";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { stepsUtils } from "../../utils";

export const StepsProvider = ({ children }) => {
  const [stepsLocalStorage, setStepsLocalStorage] = useLocalStorage(
    "steps_form_data",
    stepsUtils.getStepsLocalStoragefromData(initialStepState)
  );
  const [state, dispatch] = useReducer(
    stepsReducer,
    stepsUtils.mergeStepsLocalStorageIntoData(
      stepsLocalStorage,
      initialStepState
    )
  );
  useMemo(() => {
    state.updateLocalStorage = function () {
      setStepsLocalStorage(stepsUtils.getStepsLocalStoragefromData(this));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setStepData = (key, value, props) =>
    dispatch({ type: "SET_DATA", payload: { key, value, props } });

  const value = {
    getCurrentStep() {
      const currentStep = state.steps[state.currentStepKey];

      // Bypass `enableNextNove` for all steps except `selectSkip`
      currentStep.enableNextMove =
        currentStep.key === "selectSkip" ? !!currentStep.formData : true;
      return currentStep;
    },
    next: () => dispatch({ type: "NEXT" }),
    prev: () => dispatch({ type: "PREV" }),
    setCurrentStep: (key) => dispatch({ type: "SET_STEP", payload: key }),
    setStepData,
    setCurrentStepData(value, props) {
      return setStepData(state.currentStepKey, value, props);
    },
    reset: () => dispatch({ type: "RESET" }),
  };

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  );
};
