import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";
import StepContent from "./StepContent";
import StepMovement from "./StepMovement";
const StepHeader = ({ label, Icon }) => {
  const ComponentIcon = Icon;
  return (
    <div
      className="flex items-center justify-center gap-2 p-2 lg:p-4
  bg-blue-700 text-gray-100 text-lg sm:text-2xl lg:text-4xl"
    >
      <ComponentIcon width="30" height="30" /> {label}
    </div>
  );
};

const StepView = () => {
  const { label, Icon, key } = useCurrentStep();
  return (
    <div>
      <StepHeader label={label} Icon={Icon} />
      <StepContent view={key} />
      <StepMovement />
    </div>
  );
};

export default StepView;
