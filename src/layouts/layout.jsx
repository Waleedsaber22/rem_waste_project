import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Stepper from "../components/step/Stepper";
import {
  Calendar1Icon,
  CreditCardIcon,
  MapIcon,
  TrashIcon,
  TruckIcon,
} from "lucide-react";
import { stepsData } from "../constants/steps";
import { StepProvider } from "../contexts/stepContextProvider/StepProvider";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <StepProvider>
        <Sidebar
          titleClassName="bg-blue-800 text-white p-2"
          title="Your Progress"
        >
          <Stepper enableStickWithOrder steps={stepsData} />
        </Sidebar>
        <main className="flex-1 bg-gray-50 transition-all">{children}</main>
      </StepProvider>
    </div>
  );
};

export default Layout;
