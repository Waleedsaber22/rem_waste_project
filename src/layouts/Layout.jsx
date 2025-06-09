import Sidebar from "./Sidebar";
import Stepper from "../features/steps/components/Stepper";

import { stepsData } from "../features/steps/constants";
import { StepsProvider } from "../features/steps/contexts/stepsContextProvider/StepsProvider";
import { useThemeContext } from "../contexts/themeContextProvider/ThemeContext";
const Layout = ({ children }) => {
  const { primaryDarkColors, secondaryLightColors } = useThemeContext();
  return (
    <div className="min-h-screen flex flex-row">
      <StepsProvider>
        <Sidebar
          titleClassName={`${primaryDarkColors.bg} text-white p-2`}
          title="Your Progress"
        >
          <Stepper className="p-4" enableStickWithOrder steps={stepsData} />
        </Sidebar>
        <main
          className={`max-h-screen overflow-auto flex-1 ${secondaryLightColors.bg} transition-all`}
        >
          {children}
        </main>
      </StepsProvider>
    </div>
  );
};

export default Layout;
