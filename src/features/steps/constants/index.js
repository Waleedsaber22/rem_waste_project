import {
  MapIcon,
  TrashIcon,
  TruckIcon,
  Calendar1Icon,
  CreditCardIcon,
  ShieldIcon,
} from "lucide-react";

export const stepsData = [
  {
    label: "Postcode",
    key: "postcode",
    Icon: MapIcon,
  },
  {
    label: "Waste Type",
    key: "wasteType",
    Icon: TrashIcon,
  },
  {
    label: "Select Skip",
    key: "selectSkip",
    Icon: TruckIcon,
    details:
      "Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.",
  },
  {
    label: "Permit Check",
    key: "permitCheck",
    Icon: ShieldIcon,
  },
  {
    label: "Choose Date",
    key: "chooseDate",
    Icon: Calendar1Icon,
  },
  {
    label: "Payment",
    key: "payment",
    Icon: CreditCardIcon,
  },
];
