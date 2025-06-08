import { motion } from "framer-motion";
import { Button } from "../../../components/ui/Button";

import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";
import { useStepsContext } from "../contexts/stepsContextProvider/StepsContext";

const StepMovement = () => {
  const { next, prev } = useStepsContext();
  const { hasPrev, hasNext, label } = useCurrentStep();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 left-1/2 w-3/4 md:w-1/2 lg:w-1/3 -translate-x-1/2 z-50
      flex items-center gap-4 border-2 border-blue-200
      bg-white shadow-2xl rounded-lg px-6 py-3
      backdrop-blur-md"
    >
      <div className="flex flex-col gap-2 w-full">
        {label}
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
            disabled={!hasNext}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Continue
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default StepMovement;
