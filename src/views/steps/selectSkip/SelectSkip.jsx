import { LoaderCircle } from "lucide-react";
import useGetSkipSteps from "../../../hooks/steps/useGetSkipSteps";
import SkipGrid from "./components/SkipGrid";

const SelectSkip = () => {
  const { data, isLoading } = useGetSkipSteps({
    postcode: "NR32",
    area: "Lowestoft",
  });

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center p-8 lg:p-16">
          <LoaderCircle size={80} className="animate-spin text-blue-700" />
        </div>
      ) : (
        <SkipGrid skipOptions={data} />
      )}
    </div>
  );
};

export default SelectSkip;
