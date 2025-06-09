import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../../components/ui/Button";

import { useCurrentStep } from "../contexts/stepsContextProvider/StepsContext";
import { useStepsContext } from "../contexts/stepsContextProvider/StepsContext";
import StepFormDataView from "./StepFormDataView";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const StepMovement = () => {
  const { next, prev } = useStepsContext();
  const [collapsed, setCollapsed] = useState(true);
  const { hasPrev, hasNext, enableNextMove, details } = useCurrentStep();

  useEffect(() => {
    setCollapsed(!enableNextMove);
  }, [enableNextMove]);
  return (
    <>
      <div className="mt-[50px]"></div>
      <Button
        onClick={() => setCollapsed((prev) => !prev)}
        className="fixed z-[100] bottom-[20px] right-[-10px] sm:right-0 -translate-x-1/2 z-50 
        bg-blue-700 text-white shadow-md border border-blue-200 
        rounded-full p-1 hover:bg-gray-100 hover:text-blue-700 !px-2 sm:!px-4"
      >
        {collapsed ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </Button>
      <AnimatePresence>
        {!collapsed ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-4 left-1/2 w-3/4 lg:w-1/2 -translate-x-1/2 z-50
          flex gap-4 border-2 border-blue-200
          bg-white shadow-2xl rounded-lg px-6 py-3
          backdrop-blur-md"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="max-h-[200px] overflow-auto">
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  {details}
                </div>
                <StepFormDataView />
              </div>
              <div className="flex gap-4 items-center justify-end w-full">
                <Button
                  onClick={prev}
                  disabled={!hasPrev}
                  className="bg-white text-blue-600 hover:bg-gray-100/50 border"
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
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default StepMovement;
