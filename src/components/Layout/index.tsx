import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { navItems } from "../../utils/constants/navItems";
import type { ILayout } from "../../interfaces/Layout.interface";

const Layout = ({ children, page = navItems[0].text }: ILayout) => {
  return (
    <div className="h-full flex">
      <SideNav page={page} />
      <div className="p-7 w-full h-full overflow-auto">
        <TopNav />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
