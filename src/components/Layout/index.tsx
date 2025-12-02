import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { instructorNavItems, studentNavItems } from "../../utils/constants/navItems";
import type { ILayout } from "../../interfaces/Layout.interface";

const Layout = ({
  children,
  parentPage,
  pageHeading,
  userType = "instructor",
}: ILayout) => {
  const navItems = userType === "student" ? studentNavItems : instructorNavItems;
  const defaultPage = navItems[0].link;

  return (
    <div className="h-full flex bg-gray-50">
      <SideNav parentPage={parentPage || defaultPage} userType={userType} />
      <div className="px-8 py-6 w-full h-full overflow-auto">
        <TopNav text={pageHeading} userType={userType} />
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
