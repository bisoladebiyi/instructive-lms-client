import { CircularProgress } from "@mui/material";
import type { IButton } from "../../interfaces/Button.interface";

const Button = ({
  className,
  text,
  onClick,
  type = "button",
  loading = false,
  disabled = false,
}: IButton) => {
  const isDisabled = loading || disabled;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={`bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white px-5 py-2.5 rounded-lg font-medium text-sm cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-600 disabled:hover:shadow-sm flex items-center justify-center gap-2 ${className}`}
    >
      {loading && <CircularProgress size={16} sx={{ color: "white" }} />}
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
