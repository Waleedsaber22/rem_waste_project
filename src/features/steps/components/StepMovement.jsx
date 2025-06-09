import { motion } from "framer-motion";
import { Button } from "../../../components/ui/Button";

import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";
import { useStepsContext } from "../contexts/stepsContextProvider/StepsContext";

const StepMovement = () => {
  const { next, prev } = useStepsContext();
  const { hasPrev, hasNext, enableNextMove, details, formData } =
    useCurrentStep();

  return (
    <>
      <div className="mt-[150px]"></div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-4 left-1/2 w-3/4 lg:w-1/2 -translate-x-1/2 z-50
      flex gap-4 border-2 border-blue-200
      bg-white shadow-2xl rounded-lg px-6 py-3
      backdrop-blur-md"
      >
        <div className="flex flex-col gap-2 w-full">
          <div className="max-h-[80px] overflow-auto">
            <div className="text-xs sm:text-sm font-medium text-gray-600">
              {details}
            </div>
            {formData?.render}
          </div>
          <div className="flex gap-4 items-center justify-end w-full">
            <Button
              onClick={prev}
              disabled={!hasPrev}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Back
            </Button>
            <Button
              onClick={next}
              disabled={!hasNext || !enableNextMove}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Continue
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default StepMovement;
