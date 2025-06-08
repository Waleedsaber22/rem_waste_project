import { useMemo } from "react";

const Stepper = ({
  steps = [],
  onStepChange = () => {},
  currentStep = steps[0]?.key,
  allowTillStep = undefined,
}) => {
  const allowTillIndex = useMemo(
    () =>
      allowTillStep
        ? steps.findIndex(({ key }) => key === allowTillStep) || 0
        : steps.length,
    [steps, allowTillStep]
  );

  return (
    <ol className="space-y-4">
      {steps.map(({ key, name, icon }, index) => (
        <li
          onClick={() => onStepChange(key)}
          key={key}
          className={`pl-4 border-l-4 transition-colors duration-300
            ${
              index > allowTillIndex
                ? "border-gray-300 text-gray-400 pointer-events-none"
                : key === currentStep
                ? "border-blue-500 text-blue-700 font-semibold"
                : "border-gray-300 text-gray-600 cursor-pointer"
            }`}
        >
          <div className="flex gap-2 items-center">
            {icon} {name}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
