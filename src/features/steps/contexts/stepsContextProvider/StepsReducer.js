import { stepsData } from "../../constants";
import { stepsUtils } from "../../utils";

const steps = stepsUtils.convertStepsArrToObj(stepsData);
export const initialStepState = {
  currentStepKey: stepsData[0]?.key,
  steps,
};

export const stepsReducer = (state, action) => {
  let newState = state;
  switch (action.type) {
    case "NEXT":
    case "PREV": {
      const move = action.type === "NEXT" ? 1 : -1;
      const index =
        stepsUtils.getStepOrderByKey(stepsData, state.currentStepKey) - 1;
      const movedStep = stepsData[index + move]?.key;
      newState = movedStep ? { ...state, currentStepKey: movedStep } : state;
      break;
    }

    case "SET_STEP":
      newState = { ...state, currentStepKey: action.payload };
      break;

    case "SET_DATA": {
      const stepKey = action.payload.key || state.currentStepKey;
      newState = {
        ...state,
        steps: {
          ...state.steps,
          [stepKey]: {
            ...state.steps[stepKey],
            ...action.payload.props,
            formData: action.payload.value,
          },
        },
      };

      break;
    }
    case "RESET": {
      newState = initialStepState;
      break;
    }
    default:
      break;
  }

  newState.updateLocalStorage?.();
  return newState;
};
