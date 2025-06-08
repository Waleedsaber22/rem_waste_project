import { useCurrentStep } from "../contexts/stepContextProvider/StepContext";

const StepView = () => {
  const { label, Icon } = useCurrentStep();
  return (
    <div>
      <div
        className="flex items-center justify-center gap-2 p-2
      bg-blue-700 text-gray-100 text-lg sm:text-2xl lg:text-4xl"
      >
        <Icon width="30" height="30" /> {label}
      </div>
    </div>
  );
};

export default StepView;
