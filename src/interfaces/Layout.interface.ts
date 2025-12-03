import type React from "react";

export type UserType = "instructor" | "student";

export interface ILayout {
    children: React.JSX.Element;
    parentPage?: string;
    pageHeading?: string;
    userType?: UserType;
    hideHeadingOnDesktop?: boolean;
}

export interface ISideNav {
    parentPage?: string;
    userType?: UserType;
    isOpen?: boolean;
    onClose?: () => void;
}

export interface ITopNav {
    text?: string;
    userType?: UserType;
    onMenuClick?: () => void;
    hideHeadingOnDesktop?: boolean;
}

export interface ILogo {
  className?: string;
}