import { useThemeContext } from "../../../contexts/themeContextProvider/ThemeContext";
import {
  useCurrentStep,
  useStepsContext,
} from "../contexts/stepsContextProvider/StepsContext";

const Stepper = ({
  steps = [],
  enableStickWithOrder = false,
  className = "",
}) => {
  const { primaryColors } = useThemeContext();
  const { setCurrentStep } = useStepsContext();
  const currentStep = useCurrentStep();

  const allowTillOrder = enableStickWithOrder
    ? currentStep.enableNextMove
      ? currentStep.order + 1
      : currentStep.order
    : undefined;

  return (
    <ol className={`space-y-4 ${className}`}>
      {steps.map(({ key, label, Icon }, index) => {
        const ComponentIcon = Icon;
        return (
          <li
            onClick={() => setCurrentStep(key)}
            key={key}
            className={`enable-sidebar-close pl-4 border-l-4 transition-colors duration-300
            ${
              index + 1 > allowTillOrder
                ? "border-gray-300 text-gray-400 pointer-events-none"
                : key === currentStep.key
                ? `border-blue-500 ${primaryColors.text} font-semibold`
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
