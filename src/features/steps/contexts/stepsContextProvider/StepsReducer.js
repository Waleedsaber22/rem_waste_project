import { stepsData } from "../../constants";
import { stepsUtils } from "../../utils";

const steps = stepsUtils.convertStepsArrToObj(stepsData);
export const initialStepState = {
  currentStepKey: stepsData[0]?.key,
  steps,
};

export const stepsReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
    case "PREV": {
      const move = action.type === "NEXT" ? 1 : -1;
      const index =
        stepsUtils.getStepOrderByKey(stepsData, state.currentStepKey) - 1;
      const movedStep = stepsData[index + move]?.key;
      return movedStep ? { ...state, currentStepKey: movedStep } : state;
    }

    case "SET_STEP":
      return { ...state, currentStepKey: action.payload };
    case "SET_DATA":
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.payload.key]: {
            ...state.steps[action.payload.key],
            data: action.payload.value,
          },
        },
      };
    case "RESET":
      return initialStepState;
    default:
      return state;
  }
};
