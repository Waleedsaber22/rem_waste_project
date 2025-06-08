import SelectSkip from "../../views/steps/SelectSkip";

const StepContent = ({ view }) => {
  switch (view) {
    case "SelectSkip":
      return <SelectSkip />;
    default:
      "There's no Content";
  }
};

export default StepContent;
