import type { ITopNav } from "../../interfaces/Layout.interface";
import { navItems } from "../../utils/constants/navItems";

const TopNav = ({ text }: ITopNav) => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold text-gray-900">
        {text === navItems[0].text ? "Welcome back!" : text}
      </h1>
      {text === navItems[0].text && (
        <p className="text-sm text-gray-500 mt-1">Here's what's happening with your courses today.</p>
      )}
    </div>
  );
};

export default TopNav;
