import Sidebar from "./Sidebar";
import Stepper from "../features/steps/components/Stepper";

import { stepsData } from "../features/steps/constants";
import { StepsProvider } from "../features/steps/contexts/stepsContextProvider/StepsProvider";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <StepsProvider>
        <Sidebar
          titleClassName="bg-blue-800 text-white p-2"
          title="Your Progress"
        >
          <Stepper className="p-4" enableStickWithOrder steps={stepsData} />
        </Sidebar>
        <main className="max-h-screen overflow-auto flex-1 bg-gray-50 transition-all">
          {children}
        </main>
      </StepsProvider>
    </div>
  );
};

export default Layout;
