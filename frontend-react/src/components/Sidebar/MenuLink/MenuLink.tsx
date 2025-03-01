import classNames from "classnames";
import type { FC, ReactNode } from "react";

import { type LinkProps, Link } from "@tanstack/react-router";

import "./MenuLink.scss";
import Typography from "@/components/Typography";

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
        {icon && <div className="menu-link__icon">{icon}</div>}
        <div className="menu-link__text">
          <Typography variant="body1">{children}</Typography>
        </div>
      </Link>
    </li>
  );
};

export default MenuLink;
