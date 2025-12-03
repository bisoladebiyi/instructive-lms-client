import { useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import {
  instructorNavItems,
  studentNavItems,
} from "../../utils/constants/navItems";
import type { ILayout } from "../../interfaces/Layout.interface";

const Layout = ({
  children,
  parentPage,
  pageHeading,
  userType = "instructor",
  hideHeadingOnDesktop = false,
}: ILayout) => {
  const navItems =
    userType === "student" ? studentNavItems : instructorNavItems;
  const defaultPage = navItems[0].link;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-full flex bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SideNav parentPage={parentPage || defaultPage} userType={userType} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <SideNav
          parentPage={parentPage || defaultPage}
          userType={userType}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      <div className="w-full h-full overflow-auto">
        {/* Fixed TopNav on mobile */}
        <div className="fixed top-0 left-0 right-0 z-30 bg-gray-50 px-4 py-3 border-b border-gray-200 lg:hidden">
          <TopNav
            text={pageHeading}
            userType={userType}
            onMenuClick={() => setIsMobileMenuOpen(true)}
            hideHeadingOnDesktop={hideHeadingOnDesktop}
          />
        </div>

        {/* Desktop TopNav */}
        <div
          className={`hidden lg:block px-8 py-6 ${
            hideHeadingOnDesktop ? "lg:hidden" : ""
          }`}
        >
          <TopNav
            text={pageHeading}
            userType={userType}
            onMenuClick={() => setIsMobileMenuOpen(true)}
            hideHeadingOnDesktop={hideHeadingOnDesktop}
          />
        </div>

        {/* Main content */}
        <main className="h-full px-4 sm:px-6 lg:px-8 pt-16 pb-4 sm:pt-4 sm:pb-6 lg:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
