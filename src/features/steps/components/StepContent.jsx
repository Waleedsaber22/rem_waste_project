import { ImageOffIcon } from "lucide-react";
import SelectSkip from "../contents/selectSkip/SelectSkip";
import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";
import { useThemeContext } from "../../../contexts/themeContextProvider/ThemeContext";

const StepContent = () => {
  const data = useCurrentStep();
  const { primaryColors } = useThemeContext();

  switch (data.key) {
    case "selectSkip":
      return <SelectSkip />;
    default:
      return (
        <div
          className={`flex items-center justify-center p-8 h-full text-white ${primaryColors.bg}`}
        >
          <ImageOffIcon width={50} height={50} />
        </div>
      );
  }
};

export default StepContent;
