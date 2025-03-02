import classNames from "classnames";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import type { MenuHTMLAttributes } from "react";

import "./SidebarNav.scss";

const SidebarNav = ({ children, className, ...rest }: MenuHTMLAttributes<HTMLMenuElement>) => {
  return (
    <OverlayScrollbarsComponent
      options={{ scrollbars: { autoHide: "leave" }, overflow: { x: "hidden" } }}
      className={classNames("sidebar-nav", className)}
    >
      <nav {...rest}>{children}</nav>
    </OverlayScrollbarsComponent>
  );
};

export default SidebarNav;
