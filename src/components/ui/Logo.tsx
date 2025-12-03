import type { ILogo } from "../../interfaces/Layout.interface";

const Logo = ({ className }: ILogo) => {
  return (
    <div className={`font-semibold text-xl tracking-tight ${className}`}>
      <span className="text-primary-500">Instruc</span>
      <span>tive</span>
    </div>
  );
};

export default Logo;
