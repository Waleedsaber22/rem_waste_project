import {
  useCurrentStep,
  useStepsContext,
} from "../../../contexts/stepsContextProvider/StepsContext";
import SelectSkipCard from "./SelectSkipCard";

const SelectSkipGrid = ({ skipOptions, skeleton }) => {
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
      {(skeleton
        ? Array.from({ length: 10 }).map(() => ({
            size: "__",
            skeleton: true,
            allowed_on_road: true,
            hire_period_days: "__",
            price_before_vat: "__",
          }))
        : skipOptions
      )?.map((skip, index) => (
        <SelectSkipCard
          key={skip.id || index}
          id={skip.id}
          skeleton={skip.skeleton}
          size={skip.size}
          allowedOnRoad={skip.allowed_on_road}
          hirePeriod={skip.hire_period_days}
          priceBeforeVat={skip.price_before_vat}
          onSelect={() => handleSelect(skip)}
        />
      ))}
    </div>
  );
};

export default SelectSkipGrid;
