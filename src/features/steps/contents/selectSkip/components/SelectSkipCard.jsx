import { useState } from "react";
import { Button } from "../../../../../components/ui/Button";
import { AlertCircle, Check } from "lucide-react";
import { useCurrentStep } from "../../../contexts/stepsContextProvider/StepsContext";
import { useThemeContext } from "../../../../../contexts/themeContextProvider/ThemeContext";
import Skeleton from "../../../../../components/ui/Skeleton";
const SelectSkipCardImage = ({ url, size, skeleton }) => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative h-[200px]">
      {skeleton ? null : isError ? (
        <div className="bg-gray-100 h-full flex items-center justify-center text-gray-400 text-xl font-semibold">
          Skip Size {size} yd³
        </div>
      ) : (
        <img
          onLoad={() => {
            setIsLoading(false);
          }}
          src={url}
          loading="lazy"
          alt={`${size} yarder skip`}
          onError={() => {
            setIsLoading(false);
            setIsError(true);
          }}
          className="m-auto w-full h-full max-w-[250px] object-contain"
        />
      )}
      {isLoading ? (
        <Skeleton
          skeletonBg="bg-blue-100"
          className="top-0 left-0 absolute h-[200px] w-full"
          rounded={false}
        />
      ) : null}
    </div>
  );
};
export const SkipCardWarning = ({
  warningMsg = "",
  positionClassName = "",
  className = "",
}) => {
  const { secondaryColors } = useThemeContext();
  return (
    <div
      className={`bg-yellow-700/90 rounded-sm p-0.75 sm:p-1  text-xs sm:text-[13px] font-medium
            absolute ${
              positionClassName ? positionClassName : "top-0 left-0"
            } flex gap-2 items-center justify-center ${
        secondaryColors.text
      } ${className}`}
    >
      <AlertCircle size={17} className="shrink-0" />

      {warningMsg}
    </div>
  );
};
const SelectSkipCard = ({
  id,
  size,
  hirePeriod,
  allowedOnRoad,
  priceBeforeVat,
  onSelect,
  skeleton,
}) => {
  const {
    primaryColors,
    primaryDarkColors,
    primaryLightColors,
    secondaryColors,
    secondaryLightColors,
  } = useThemeContext();
  const { formData } = useCurrentStep();
  const selectedCard = formData ? formData.id === id : false;
  return (
    <div
      onClick={onSelect}
      className={`m-auto cursor-pointer flex flex-col justify-between ${
        selectedCard
          ? `outline ${primaryColors.outline} shadow-xl`
          : "shadow-md"
      } relative bg-white rounded-2xl overflow-hidden hover:shadow-lg
      transition-shadow duration-300 w-full max-w-sm`}
    >
      {selectedCard ? (
        <div className={`absolute w-full p-2 ${secondaryLightColors.bg}`}>
          <Check className={`${primaryColors.text}`} />
        </div>
      ) : null}
      <SelectSkipCardImage
        skeleton={skeleton}
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
          <div className={`text-lg font-semibold ${primaryDarkColors.text}`}>
            Hire for {hirePeriod} days
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-gray-500">Price</div>
              {!skeleton ? (
                <div className={`text-xl font-bold ${primaryLightColors.text}`}>
                  £{priceBeforeVat}
                </div>
              ) : (
                <Skeleton className={`mt-2 w-16 h-[20px]`} />
              )}
            </div>
            <div>
              <div className="text-sm text-gray-500">Size</div>
              <div className="text-lg font-bold text-black">
                {!skeleton ? (
                  size
                ) : (
                  <Skeleton className={`inline px-3 mr-1 h-[20px]`} />
                )}{" "}
                Yards
              </div>
            </div>
          </div>
        </div>

        <Button
          disabled={skeleton}
          className={`${secondaryLightColors.bg} ${secondaryColors.bgHover} ${primaryColors.text} w-full`}
          variant="primary"
        >
          Select Skip
        </Button>
      </div>
    </div>
  );
};

export default SelectSkipCard;
