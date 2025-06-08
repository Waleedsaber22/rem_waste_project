import { motion } from "framer-motion";
import { Button } from "../ui/Button";

import { useCurrentStep } from "../../contexts/stepContextProvider/StepContext";
import { useStepContext } from "../../contexts/stepContextProvider/StepContext";

const StepMovement = () => {
  const { next, prev } = useStepContext();
  const { hasPrev, hasNext, label } = useCurrentStep();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white shadow-xl rounded-full px-6 py-3 border border-gray-200 backdrop-blur-md"
    >
      <div className="flex lg:flex-col gap-2 items-center">
        {label}
        <div className="flex gap-2 items-center">
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
