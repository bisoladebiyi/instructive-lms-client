import type { ITopNav } from "../../interfaces/Layout.interface";

const TopNav = ({ text, userType = "instructor" }: ITopNav) => {
  const isStudent = userType === "student";
  const isDashboard = text === "Dashboard";

  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold text-gray-900">
        {isDashboard ? "Welcome back!" : text}
      </h1>
      {isDashboard && (
        <p className="text-sm text-gray-500 mt-1">
          {isStudent
            ? "Continue your learning journey."
            : "Here's what's happening with your courses today."}
        </p>
      )}
    </div>
  );
};

export default TopNav;
