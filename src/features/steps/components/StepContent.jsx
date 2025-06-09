import { ImageOffIcon } from "lucide-react";
import SelectSkip from "../contents/selectSkip/SelectSkip";
import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";

const StepContent = () => {
  const data = useCurrentStep();

  switch (data.key) {
    case "selectSkip":
      return <SelectSkip />;
    default:
      return (
        <div className="flex items-center justify-center p-8 h-full text-white bg-blue-700">
          <ImageOffIcon width={50} height={50} />
        </div>
      );
  }
};

export default StepContent;
