interface ILogo {
  className?: string;
}
const Logo = ({ className }: ILogo) => {
  return (
    <div className={`font-mono text-blue-950 font-bold text-xl ${className}`}>
      Instructive
    </div>
  );
};

export default Logo;
