import classNames from "classnames";
import type { FC, ReactNode } from "react";

import { type LinkProps, Link } from "@tanstack/react-router";

import "./MenuLink.scss";

interface MenuLinkProps extends Omit<LinkProps, "children"> {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const MenuLink: FC<MenuLinkProps> = ({ children, className, icon, ...rest }) => {
  return (
    <li className={classNames("menu-link", className)}>
      <Link
        className="menu-link__button"
        activeProps={{ className: "menu-link__button--active" }}
        {...rest}
      >
        {icon && <span className="menu-link__icon">{icon}</span>}
        <span className="menu-link__label">{children}</span>
      </Link>
    </li>
  );
};

export default MenuLink;
