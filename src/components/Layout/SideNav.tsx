import { instructorNavItems, studentNavItems } from "../../utils/constants/navItems";
import { TbLogout } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { IROUTES } from "../../utils/constants/routes";
import { Link, useNavigate } from "react-router";
import type { ISideNav } from "../../interfaces/Layout.interface";
import Logo from "../ui/Logo";

const Sidenav = ({ parentPage, userType = "instructor", isOpen, onClose }: ISideNav) => {
  const navigate = useNavigate();
  const isStudent = userType === "student";
  const navItems = isStudent ? studentNavItems : instructorNavItems;

  const logOut = () => {
    navigate(IROUTES.LOGIN + `?role=${userType}`);
  };

  const handleNavClick = () => {
    if (onClose) onClose();
  };

  return (
    <aside
      className={`
        w-64 min-w-64 bg-sidebar text-white p-5 flex flex-col h-full
        fixed lg:relative z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Mobile close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <IoClose className="text-2xl" />
        </button>
      )}

      <div className="text-center flex flex-col justify-center items-center w-full mt-2 mb-8">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full ring-4 ring-primary-400/30 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={isStudent
              ? "https://avatar.iran.liara.run/public/boy"
              : "https://avatar.iran.liara.run/public/job/teacher/male"
            }
            alt=""
          />
        </div>
        <p className="text-base font-semibold mt-3 text-white">
          {isStudent ? "John Doe" : "Abisola Adebiyi"}
        </p>
        <p className="text-primary-300 text-xs font-medium">
          {isStudent ? "Student" : "Instructor"}
        </p>
      </div>

      <ul className="flex-1 list-none space-y-1">
        {navItems.map((item) => (
          <Link to={item.link} key={item.text} onClick={handleNavClick}>
            <li
              className={`flex gap-3 px-4 py-3 text-sm font-medium items-center rounded-lg cursor-pointer transition-all duration-200 ${
                parentPage === item.link
                  ? "bg-sidebar-active text-white shadow-lg shadow-primary-900/20"
                  : "text-gray-300 hover:bg-sidebar-hover hover:text-white"
              }`}
            >
              <item.icon className="text-lg" />
              <span>{item.text}</span>
            </li>
          </Link>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
        <Logo className="text-white/70 text-xs" />
        <button
          onClick={logOut}
          className="cursor-pointer p-2 rounded-lg text-gray-400 hover:text-white hover:bg-sidebar-hover transition-all duration-200"
          title="Logout"
        >
          <TbLogout className="text-xl" />
        </button>
      </div>
    </aside>
  );
};

export default Sidenav;
