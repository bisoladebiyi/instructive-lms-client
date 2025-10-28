import type { IInput } from "../../interfaces/Input.interface";

const Input = ({
  type,
  id,
  className,
  inputClass,
  name,
  label,
  placeholder,
}: IInput) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        className={`w-full mt-1 border border-gray-400 p-2 text-sm text-gray-500 rounded outline-0 ${inputClass}`}
      />
    </div>
  );
};

export default Input;
