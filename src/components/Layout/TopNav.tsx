import type { ITopNav } from "../../interfaces/Layout.interface";

const TopNav = ({ text = "Welcome 👋" }: ITopNav) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{text}</h1>
    </div>
  );
};

export default TopNav;
