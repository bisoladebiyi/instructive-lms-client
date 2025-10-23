import type { IInput } from "../../interfaces/Input.interface"

const Input = ({type, id, className, inputClass, name, label}: IInput) => {
  return (
    <div className={`${className}`}>
        <label htmlFor={id} className='text-sm'>{label}</label>
        <input id={id} type={type} name={name} className={`w-full border border-gray-400 p-2 text-sm text-gray-600 rounded outline-0 ${inputClass}`} />
    </div>
  )
}

export default Input