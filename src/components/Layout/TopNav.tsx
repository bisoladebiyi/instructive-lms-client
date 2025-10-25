import type { ITopNav } from "../../interfaces/Layout.interface";
import { navItems } from "../../utils/constants/navItems";

const TopNav = ({ text }: ITopNav) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">
        {text === navItems[0].text ? "Welcome 👋" : text}
      </h1>
    </div>
  );
};

export default TopNav;
