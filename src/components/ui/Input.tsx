import type { IInput } from "../../interfaces/Input.interface";

const Input = ({
  type,
  id,
  className,
  inputClass,
  name,
  label,
  placeholder,
  ...props
}: IInput) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        className={`w-full mt-1.5 border border-gray-300 px-3 py-2.5 text-sm text-gray-900 rounded-lg outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200 placeholder:text-gray-400 ${inputClass}`}
        {...props}
      />
    </div>
  );
};

export default Input;
