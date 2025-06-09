export const stepsUtils = {
  /*
    Calculating order from 1 to n
  */
  getStepOrderByKey(stepsArr, targetKey) {
    const targetIndex = stepsArr.findIndex(({ key }) => key === targetKey);
    return targetIndex + 1;
  },
  /*
    Converting Steps from array into object used for step reducer
  */
  convertStepsArrToObj(stepsArr) {
    return stepsArr.reduce(
      (prevSteps, curr, index, arr) => ({
        ...prevSteps,
        [curr.key]: {
          order: index + 1,
          hasNext: arr.length !== index + 1,
          hasPrev: index !== 0,
          formData: null,
          ...curr,
        },
      }),
      {}
    );
  },
  getStepsLocalStoragefromData(currentSteps) {
    const stepsSession = {
      form: {},
      currentStepKey: currentSteps.currentStepKey,
    };
    const stepsFormData = stepsSession.form;
    const stepsDetails = currentSteps.steps;
    Object.keys(stepsDetails).forEach((key) => {
      stepsFormData[key] = stepsDetails[key].formData;
    });
    return stepsSession;
  },
  mergeStepsLocalStorageIntoData(localStorage, currentSteps) {
    if (!localStorage) return;
    currentSteps.currentStepKey =
      localStorage.currentStepKey || currentSteps.currentStepKey;
    const stepsDetails = currentSteps.steps;
    Object.keys(stepsDetails).forEach((key) => {
      stepsDetails[key].formData =
        localStorage.form[key] || stepsDetails[key].formData;
    });
    return currentSteps;
  },
};
