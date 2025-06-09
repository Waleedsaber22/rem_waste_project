import { CircleOff, LoaderCircle } from "lucide-react";
import SelectSkipGrid from "./components/SelectSkipGrid";
import useGetSkipSteps from "./hooks/useGetSkipSteps";
import { useThemeContext } from "../../../../contexts/themeContextProvider/ThemeContext";

const SelectSkip = () => {
  const { primaryColors } = useThemeContext();
  const { data, isLoading, error } = useGetSkipSteps({
    postcode: "NR32",
    area: "Lowestoft",
  });

  return (
    <div>
      {isLoading ? (
        <div
          className={`flex flex-col gap-2 items-center justify-center p-8 lg:p-16 ${primaryColors.text}`}
        >
          <LoaderCircle size={80} className="animate-spin" />
        </div>
      ) : error ? (
        <div className="flex flex-col gap-2 items-center justify-center p-8 lg:p-16 text-red-400">
          <CircleOff size={80} />
          {error}
        </div>
      ) : (
        <SelectSkipGrid skipOptions={data} />
      )}
    </div>
  );
};

export default SelectSkip;
