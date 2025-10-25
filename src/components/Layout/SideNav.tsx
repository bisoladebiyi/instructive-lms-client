import { navItems } from "../../utils/constants/navItems";
import { TbLogout } from "react-icons/tb";
import { IROUTES } from "../../utils/constants/routes";
import { Link, useNavigate } from "react-router";
import type { ISideNav } from "../../interfaces/Layout.interface";
import Logo from "../ui/Logo";

const Sidenav = ({ page }: ISideNav) => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate(IROUTES.LOGIN);
  };
  return (
    <aside className="w-1/6 bg-gray-800 text-white p-3 relative">
      <div className="text-center text-sm flex flex-col justify-center items-center w-full mt-3">
        <img
          className="w-20 h-20"
          src="https://avatar.iran.liara.run/public/job/teacher/male"
          alt=""
        />
        <p className="text-lg font-normal mt-1">Abisola Adebiyi</p>
        <p className="font-extralight text-gray-300 text-xs">Instructor</p>
      </div>

      <ul className="mt-5 list-none">
        {navItems.map((item) => (
          <Link to={item.link} key={item.text}>
            <li
              className={`flex gap-2 p-3 text-sm font-light items-center hover:bg-gray-50/10 ${
                page === item.link || page?.includes(item.link)
                  ? "bg-gray-50/10"
                  : ""
              } rounded mb-3 cursor-pointer transition-colors`}
            >
              <item.icon className="text-xl" />
              <span>{item.text}</span>
            </li>
          </Link>
        ))}
      </ul>
      <Logo className="text-white absolute bottom-5 left-5 text-[13px]" />
      <button
        onClick={logOut}
        className="cursor-pointer absolute right-5 bottom-5 hover:scale-105"
      >
        <TbLogout className="text-xl" />
      </button>
    </aside>
  );
};

export default Sidenav;
