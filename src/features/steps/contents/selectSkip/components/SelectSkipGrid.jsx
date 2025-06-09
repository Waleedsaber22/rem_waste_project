import {
  useCurrentStep,
  useStepsContext,
} from "../../../contexts/stepsContextProvider/StepsContext";
import SelectSkipCard from "./SelectSkipCard";

const SelectSkipGrid = ({ skipOptions }) => {
  const { setCurrentStepData } = useStepsContext();
  const currentStep = useCurrentStep();
  const handleSelect = (selectedValue) => {
    const selectedData =
      currentStep.formData && currentStep.formData.id === selectedValue.id
        ? null
        : selectedValue;
    setCurrentStepData(selectedData);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {skipOptions?.map((skip) => (
        <SelectSkipCard
          key={skip.id}
          id={skip.id}
          size={skip.size}
          hirePeriod={skip.hire_period_days}
          priceBeforeVat={skip.price_before_vat}
          onSelect={() => handleSelect(skip)}
        />
      ))}
    </div>
  );
};

export default SelectSkipGrid;
