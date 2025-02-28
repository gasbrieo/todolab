import classNames from "classnames";
import type { FC, MenuHTMLAttributes } from "react";

import { useSidebar } from "../SidebarContext";

import "./Menu.scss";

interface MenuProps extends MenuHTMLAttributes<HTMLMenuElement> {
  subHeading?: string;
}

const Menu: FC<MenuProps> = ({ children, className, subHeading, ...rest }) => {
  const { isCollapsed } = useSidebar();

  return (
    <nav
      className={classNames("menu", className)}
      {...rest}
    >
      {subHeading && <div className="menu__sub-heading">{isCollapsed ? "..." : subHeading}</div>}
      <ul className="menu__content">{children}</ul>
    </nav>
  );
};

export default Menu;
