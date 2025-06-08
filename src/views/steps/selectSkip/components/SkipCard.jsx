import { useState } from "react";
import { Button } from "../../../../components/ui/Button";
import { Check } from "lucide-react";
const SkipCardImage = ({ url, size }) => {
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
          alt={`${size} yarder skip`}
          onError={() => setIsError(true)}
          className="m-auto w-full h-auto max-w-[250px] object-contain"
        />
      )}
    </>
  );
};
const SkipCard = ({ size, hirePeriod, priceBeforeVat, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="m-auto cursor-pointer flex flex-col justify-between border border-blue-700 relative
    bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl
    transition-shadow duration-300 w-full max-w-sm"
    >
      <div className="absolute w-full p-2 bg-gray-100">
        <Check className="text-blue-700" />
      </div>
      <SkipCardImage
        size={size}
        url={`/skips/skip-sizes/${size}-yarder-skip.jpg`}
      />

      <div className="space-y-2">
        <div className="flex flex-col gap-2 p-4">
          <div className="text-lg font-semibold">
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

export default SkipCard;
