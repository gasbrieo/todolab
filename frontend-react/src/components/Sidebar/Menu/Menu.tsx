import classNames from "classnames";
import type { FC, MenuHTMLAttributes } from "react";

import "./Menu.scss";

interface MenuProps extends MenuHTMLAttributes<HTMLMenuElement> {
  subHeading?: string;
}

const Menu: FC<MenuProps> = ({ children, className, subHeading, ...rest }) => {
  return (
    <nav
      className={classNames("menu", className)}
      {...rest}
    >
      {subHeading && <div className="menu__sub-heading">{subHeading}</div>}
      <ul>{children}</ul>
    </nav>
  );
};

export default Menu;
