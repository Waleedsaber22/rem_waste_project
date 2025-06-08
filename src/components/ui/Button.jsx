export const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 h-10 rounded-md text-sm font-medium cursor-pointer  transition focus:outline-none
    focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    ${className}`}
    >
      {children}
    </button>
  );
};
