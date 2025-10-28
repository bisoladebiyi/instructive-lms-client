import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { navItems } from "../../utils/constants/navItems";
import type { ILayout } from "../../interfaces/Layout.interface";
import { IROUTES } from "../../utils/constants/routes";

const Layout = ({ children, page = navItems[0].link }: ILayout) => {
  let pageName = navItems.find((item) => item.link === page)?.text;
  const isCourseEdit = page === IROUTES.COURSE_EDIT;

  if (isCourseEdit) {
    pageName = "Edit Course";
  }

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
