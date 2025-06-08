import {
  useCurrentStep,
  useStepContext,
} from "../../contexts/stepContextProvider/StepContext";

const Stepper = ({
  steps = [],
  enableStickWithOrder = false,
  className = "",
}) => {
  const { setCurrentStep } = useStepContext();
  const currentStep = useCurrentStep();

  const allowTillOrder = enableStickWithOrder ? currentStep.order : undefined;
  return (
    <ol className={`space-y-4 ${className}`}>
      {steps.map(({ key, label, Icon }, index) => {
        const ComponentIcon = Icon;
        return (
          <li
            onClick={() => setCurrentStep(key)}
            key={key}
            className={`pl-4 border-l-4 transition-colors duration-300
            ${
              index + 1 > allowTillOrder
                ? "border-gray-300 text-gray-400 pointer-events-none"
                : key === currentStep.key
                ? "border-blue-500 text-blue-700 font-semibold"
                : "border-gray-600 text-gray-600 cursor-pointer"
            }`}
          >
            <div className="flex gap-2 items-center">
              <ComponentIcon />
              {label}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
