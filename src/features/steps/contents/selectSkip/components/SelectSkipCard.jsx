import { useState } from "react";
import { Button } from "../../../../../components/ui/Button";
import { AlertCircle, Check } from "lucide-react";
import { useCurrentStep } from "../../../contexts/stepsContextProvider/StepsContext";
const SelectSkipCardImage = ({ url, size }) => {
  const [isError, setIsError] = useState(null);
  return (
    <>
      {isError ? (
        <div className="bg-gray-100 h-40 flex items-center justify-center text-gray-400 text-xl font-semibold">
          Skip Size {size} yd³
        </div>
      ) : (
        <img
          src={url}
          loading="lazy"
          alt={`${size} yarder skip`}
          onError={() => setIsError(true)}
          className="m-auto w-full h-[200px] max-w-[250px] object-contain"
        />
      )}
    </>
  );
};
export const SkipCardWarning = ({
  warningMsg = "",
  positionClassName = "",
  className = "",
}) => (
  <div
    className={`bg-yellow-700/90 rounded-sm p-0.75 sm:p-1  text-xs sm:text-[13px] font-medium
            absolute ${
              positionClassName ? positionClassName : "top-0 left-0"
            } flex gap-2 items-center justify-center text-gray-100 ${className}`}
  >
    <AlertCircle size={17} className="shrink-0" />

    {warningMsg}
  </div>
);
const SelectSkipCard = ({
  id,
  size,
  hirePeriod,
  allowedOnRoad,
  priceBeforeVat,
  onSelect,
}) => {
  const { formData } = useCurrentStep();
  const selectedCard = formData ? formData.id === id : false;
  return (
    <div
      onClick={onSelect}
      className={`m-auto cursor-pointer flex flex-col justify-between ${
        selectedCard ? "outline outline-blue-700 shadow-xl" : "shadow-md"
      } relative bg-white rounded-2xl overflow-hidden hover:shadow-lg
      transition-shadow duration-300 w-full max-w-sm`}
    >
      {selectedCard ? (
        <div className="absolute w-full p-2 bg-gray-100">
          <Check className="text-blue-700" />
        </div>
      ) : null}
      <SelectSkipCardImage
        size={size}
        url={`/skips/skip-sizes/${size}-yarder-skip.jpg`}
      />

      <div className="space-y-2">
        <div className="flex flex-col gap-2 p-4">
          {!allowedOnRoad && !selectedCard ? (
            <SkipCardWarning
              className="!rounded-br-md !rounded-none"
              warningMsg={"Not Allowed on The Road"}
            />
          ) : null}
          <div className="text-lg font-semibold text-blue-900">
            Hire for {hirePeriod} days
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-gray-500">Price</div>
              <div className="text-xl font-bold text-blue-600">
                £{priceBeforeVat}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Size</div>
              <div className="text-lg font-bold text-black">{size} Yards</div>
            </div>
          </div>
        </div>

        <Button
          className="bg-gray-100/50 hover:bg-gray-100 text-blue-700 w-full"
          variant="primary"
        >
          Select Skip
        </Button>
      </div>
    </div>
  );
};

export default SelectSkipCard;
