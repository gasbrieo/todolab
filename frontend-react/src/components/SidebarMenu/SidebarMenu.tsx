import classNames from "classnames";
import type { HTMLAttributes } from "react";

import { useSidebar } from "@/components/Sidebar";

import "./SidebarMenu.scss";

interface SidebarMenuProps extends HTMLAttributes<HTMLDivElement> {
  subHeading?: string;
}

const SidebarMenu = ({ children, className, subHeading, ...rest }: SidebarMenuProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={classNames("sidebar-menu", className)}
      {...rest}
    >
      {subHeading && <div className="sidebar-menu__sub-heading">{isCollapsed ? "..." : subHeading}</div>}
      <ul className="sidebar-menu__content">{children}</ul>
    </div>
  );
};

export default SidebarMenu;
