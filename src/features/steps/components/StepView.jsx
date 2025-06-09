import { createPortal } from "react-dom";
import { useThemeContext } from "../../../contexts/themeContextProvider/ThemeContext";
import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";
import StepContent from "./StepContent";
import StepMovement from "./StepMovement";
const StepHeader = () => {
  const { primaryColors, secondaryColors } = useThemeContext();
  const { label, Icon } = useCurrentStep();
  return (
    <div
      className={`flex items-center justify-center gap-2 p-2 lg:p-4
    ${primaryColors.bg} ${secondaryColors.text} text-lg sm:text-2xl lg:text-4xl`}
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
      <div className="mt-[50px]"></div>

      {createPortal(<StepMovement />, document.body)}
    </div>
  );
};

export default StepView;
