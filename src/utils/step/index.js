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
      (prevSteps, curr, index, arr) => ({
        ...prevSteps,
        [curr.key]: {
          order: index + 1,
          hasNext: arr.length !== index + 1,
          hasPrev: index !== 0,
          data: {},
          ...curr,
        },
      }),
      {}
    );
  },
};
