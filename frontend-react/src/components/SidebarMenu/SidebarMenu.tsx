import classNames from "classnames";
import type { HTMLAttributes } from "react";

import List from "@/components/List";
import ListSubheader from "@/components/ListSubheader";
import { useSidebar } from "@/components/Sidebar";

interface SidebarMenuProps extends HTMLAttributes<HTMLUListElement> {
  subheader?: string;
}

const SidebarMenu = ({ children, className, subheader, ...rest }: SidebarMenuProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <List
      className={classNames("sidebar-menu", className)}
      {...rest}
    >
      <ListSubheader>{isCollapsed ? "..." : subheader}</ListSubheader>
      {children}
    </List>
  );
};

export default SidebarMenu;
