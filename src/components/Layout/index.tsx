import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { navItems } from "../../utils/constants/navItems";
import type { ILayout } from "../../interfaces/Layout.interface";

const Layout = ({
  children,
  parentPage = navItems[0].link,
  pageHeading,
}: ILayout) => {
  return (
    <div className="h-full flex">
      <SideNav parentPage={parentPage} />
      <div className="p-7 w-full h-full overflow-auto">
        <TopNav text={pageHeading} />
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
