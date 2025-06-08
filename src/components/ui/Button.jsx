import { Button as HeadlessuiButton } from "@headlessui/react";
export const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  return (
    <HeadlessuiButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 h-10 rounded-md text-sm font-medium cursor-pointer  transition focus:outline-none
     focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    ${className}`}
    >
      {children}
    </HeadlessuiButton>
  );
};
