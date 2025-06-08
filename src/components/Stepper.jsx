const Stepper = ({ steps = [], onStepChange = () => {}, currentStep }) => {
  return (
    <ol className="space-y-4">
      {steps.map(({ key, name, icon }) => (
        <li
          onClick={() => onStepChange(key)}
          key={key}
          className={`pl-4 border-l-4 transition-colors duration-300
            ${
              key === currentStep
                ? "border-blue-500 text-blue-700 font-semibold"
                : "border-gray-300 text-gray-600"
            }`}
        >
          <div className="flex gap-2 items-center">
            {icon} {name}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
