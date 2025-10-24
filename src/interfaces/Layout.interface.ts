import type React from "react";

export interface ILayout {
    children: React.JSX.Element;
    page?: string;
}

export type ISideNav = Omit<ILayout, "children">

export interface ITopNav {
    text?: string;
}