import { CircleOff, LoaderCircle } from "lucide-react";
import SelectSkipGrid from "./components/SelectSkipGrid";
import useGetSkipSteps from "./hooks/useGetSkipSteps";

const SelectSkip = () => {
  const { data, isLoading, error } = useGetSkipSteps({
    postcode: "NR32",
    area: "Lowestoft",
  });

  return (
    <div>
      {error ? (
        <div className="flex flex-col gap-2 items-center justify-center p-8 lg:p-16 text-red-600/80 mt-16">
          <CircleOff size={80} />
          <span className="font-medium">{error}</span>
        </div>
      ) : (
        <SelectSkipGrid
          skeleton={isLoading && !data?.length}
          skipOptions={data}
        />
      )}
    </div>
  );
};

export default SelectSkip;
