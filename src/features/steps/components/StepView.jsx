import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";
import StepContent from "./StepContent";
import StepMovement from "./StepMovement";
const StepHeader = () => {
  const { label, Icon } = useCurrentStep();
  return (
    <div
      className="flex items-center justify-center gap-2 p-2 lg:p-4
  bg-blue-700 text-gray-100 text-lg sm:text-2xl lg:text-4xl"
    >
      <Icon size={35} /> {label}
    </div>
  );
};

const StepView = () => {
  return (
    <div>
      <StepHeader />
      <StepContent />
      <StepMovement />
    </div>
  );
};

export default StepView;
