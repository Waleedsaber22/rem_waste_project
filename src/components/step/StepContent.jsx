import { ImageOffIcon } from "lucide-react";
import SelectSkip from "../../views/steps/selectSkip/SelectSkip";

const StepContent = ({ view }) => {
  switch (view) {
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
