import React from "react";
import { useCurrentStep } from "../../contexts/stepsContextProvider/StepsContext";

const SelectSkipFormDataView = () => {
  const { formData } = useCurrentStep();
  if (formData) {
    const { price_before_vat, hire_period_days, size } = formData;
    return (
      <div className="mt-2 flex gap-w items-center justify-around">
        <div className="grow text-black bg-blue-800 rounded-lg text-white p-1 text-center">
          {size} Yards
        </div>
        <div className="flex gap-2 items-center justify-center rounded-lg grow">
          <span className="text-blue-700">Price: </span>
          <span className="">£{price_before_vat}</span>
        </div>
        <div className="flex gap-2 items-center justify-center grow">
          <span className="text-blue-700">Hire For: </span>
          {hire_period_days} days
        </div>
      </div>
    );
  } else
    return (
      <div className="text-blue-700 mt-2 text-sm sm:text-base">
        Waiting For Skip Selection ...
      </div>
    );
};

export default SelectSkipFormDataView;
