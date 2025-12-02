import type React from "react";

export type UserType = "instructor" | "student";

export interface ILayout {
    children: React.JSX.Element;
    parentPage?: string;
    pageHeading?: string;
    userType?: UserType;
}

export type ISideNav = Omit<ILayout, "children">

export interface ITopNav {
    text?: string;
    userType?: UserType;
}