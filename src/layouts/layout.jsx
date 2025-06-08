import React from "react";
import Sidebar from "../components/Sidebar";
import Stepper from "../components/Stepper";
import {
  Calendar1Icon,
  CreditCardIcon,
  MapIcon,
  TrashIcon,
  TruckIcon,
} from "lucide-react";
const Layout = ({ children }) => {
  const initialSteps = [
    {
      name: "Postcode",
      key: "postcode",
      icon: <MapIcon />,
    },
    {
      name: "Waste Type",
      key: "waste_type",
      icon: <TrashIcon />,
    },
    {
      name: "Permit Check",
      key: "permit_check",
      icon: <TruckIcon />,
    },
    {
      name: "Choose Date",
      key: "choose_date",
      icon: <Calendar1Icon />,
    },
    {
      name: "Payment",
      key: "payment",
      icon: <CreditCardIcon />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar title="Your Progress">
        <Stepper steps={initialSteps} allowTillStep={initialSteps[0].key} />
      </Sidebar>
      <main className="flex-1 p-6 bg-gray-50 transition-all">{children}</main>
    </div>
  );
};

export default Layout;
