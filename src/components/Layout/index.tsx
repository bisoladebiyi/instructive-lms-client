import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { navItems } from "../../utils/constants/navItems";
import type { ILayout } from "../../interfaces/Layout.interface";

const Layout = ({ children, page = navItems[0].link }: ILayout) => {
  const pageName = navItems.find((item) => item.link === page)?.text;
  return (
    <div className="h-full flex">
      <SideNav page={page} />
      <div className="p-7 w-full h-full overflow-auto">
        <TopNav text={pageName} />
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
