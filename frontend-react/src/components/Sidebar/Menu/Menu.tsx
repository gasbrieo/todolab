import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import { useSidebar } from "../SidebarContext";

import "./Menu.scss";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  subHeading?: string;
}

const Menu: FC<MenuProps> = ({ children, className, subHeading, ...rest }) => {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={classNames("menu", className)}
      {...rest}
    >
      {subHeading && <div className="menu__sub-heading">{isCollapsed ? "..." : subHeading}</div>}
      <ul className="menu__content">{children}</ul>
    </div>
  );
};

export default Menu;
