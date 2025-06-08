import { useCurrentStep } from "../../contexts/stepContextProvider/StepContext";
import StepContent from "./StepContent";
import StepMovement from "./StepMovement";
const StepHeader = ({ label, Icon }) => {
  const ComponentIcon = Icon;
  return (
    <div
      className="flex items-center justify-center gap-2 p-2
  bg-blue-700 text-gray-100 text-lg sm:text-2xl lg:text-4xl"
    >
      <ComponentIcon width="30" height="30" /> {label}
    </div>
  );
};

const StepView = () => {
  const { label, Icon } = useCurrentStep();
  return (
    <div>
      <StepHeader label={label} Icon={Icon} />
      <StepContent />
      <StepMovement />
    </div>
  );
};

export default StepView;
