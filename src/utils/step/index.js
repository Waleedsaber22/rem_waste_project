export const stepUtils = {
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
      (prevSteps, curr, index) => ({
        ...prevSteps,
        [curr.key]: { order: index + 1, data: {}, ...curr },
      }),
      {}
    );
  },
};
