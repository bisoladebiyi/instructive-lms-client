import type { IButton } from "../../interfaces/Button.interface";

const Button = ({ className, text, onClick, type = "button" }: IButton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white px-5 py-2.5 rounded-lg font-medium text-sm cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
