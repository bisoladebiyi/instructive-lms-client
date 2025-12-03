import { HiMenuAlt2 } from "react-icons/hi";
import type { ITopNav } from "../../interfaces/Layout.interface";

const TopNav = ({ text, userType = "instructor", onMenuClick, hideHeadingOnDesktop = false }: ITopNav) => {
  const isStudent = userType === "student";
  const isDashboard = text === "Dashboard";

  return (
    <nav className="lg:mb-2 flex items-center gap-3">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <HiMenuAlt2 className="text-2xl" />
      </button>

      <div className={hideHeadingOnDesktop ? "lg:hidden" : ""}>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          {isDashboard ? "Welcome back!" : text}
        </h1>
        {isDashboard && (
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {isStudent
              ? "Continue your learning journey."
              : "Here's what's happening with your courses today."}
          </p>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
