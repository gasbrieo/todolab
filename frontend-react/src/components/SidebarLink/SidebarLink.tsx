import classNames from "classnames";
import type { ReactNode } from "react";
import { type LinkProps, Link } from "@tanstack/react-router";

import Typography from "@/components/Typography";

import "./SidebarLink.scss";

interface SidebarLinkProps extends Omit<LinkProps, "children"> {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const SidebarLink = ({ children, className, icon, ...rest }: SidebarLinkProps) => {
  return (
    <li className={classNames("sidebar-link", className)}>
      <Link
        className="sidebar-link__button"
        activeProps={{ className: "sidebar-link__button--active" }}
        {...rest}
      >
        {icon && <div className="sidebar-link__icon">{icon}</div>}
        <Typography
          variant="body1"
          className="sidebar-link__text"
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
};

export default SidebarLink;
