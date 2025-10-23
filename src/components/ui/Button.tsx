import type { IButton } from '../../interfaces/Button.interface'

const Button = ({className, text, onClick, type = "button"}: IButton) => {
  return (
    <button onClick={onClick} type={type} className={`bg-black text-white p-3 rounded font-light text-sm uppercase ${className}`}>{text}</button>
  )
}

export default Button