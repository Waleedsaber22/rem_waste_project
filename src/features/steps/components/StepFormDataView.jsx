import SelectSkipFormDataView from "../contents/selectSkip/SelectSkipFormDataView";
import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";

const StepFormDataView = () => {
  const { key } = useCurrentStep();
  switch (key) {
    case "selectSkip":
      return <SelectSkipFormDataView />;
    default:
      return;
  }
};

export default StepFormDataView;
