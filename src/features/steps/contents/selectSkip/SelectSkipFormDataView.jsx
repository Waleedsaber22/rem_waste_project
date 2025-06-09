import React from "react";
import { useCurrentStep } from "../../contexts/stepsContextProvider/StepsContext";
import { useThemeContext } from "../../../../contexts/themeContextProvider/ThemeContext";
import { SkipCardWarning } from "./components/SelectSkipCard";

const SelectSkipFormDataView = () => {
  const { primaryColors } = useThemeContext();
  const { formData } = useCurrentStep();

  if (formData) {
    const { price_before_vat, hire_period_days, allowed_on_road, size } =
      formData;
    return (
      <div className="mt-2 flex flex-wrap gap-2 items-center justify-around">
        {!allowed_on_road ? (
          <SkipCardWarning
            className="w-[100px] sm:w-fit"
            positionClassName="top-[calc(100%-40px)] left-[20px]"
            warningMsg={"Not Allowed on The Road"}
          />
        ) : null}
        <div
          className={`grow text-black ${primaryColors.bg} rounded-lg text-white p-1 text-center`}
        >
          {size} Yards
        </div>
        <div className="flex gap-2 items-center justify-center rounded-lg grow">
          <span className={`${primaryColors.text}`}>Price: </span>£
          {price_before_vat}
        </div>
        <div className="flex gap-2 items-center justify-center grow">
          <span className={`${primaryColors.text}`}>Hire For: </span>
          {hire_period_days} days
        </div>
      </div>
    );
  } else
    return (
      <div className={`${primaryColors.text} mt-2 text-sm sm:text-base`}>
        Waiting For Skip Selection ...
      </div>
    );
};

export default SelectSkipFormDataView;
