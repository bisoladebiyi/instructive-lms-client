import type React from "react";

export interface ILayout {
    children: React.JSX.Element;
    parentPage?: string;
    pageHeading?: string
}

export type ISideNav = Omit<ILayout, "children">

export interface ITopNav {
    text?: string;
}