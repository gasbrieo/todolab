import type { ReactNode } from "react";
import { type LinkProps, Link } from "@tanstack/react-router";

import ListItem from "@/components/ListItem";
import ListItemButton from "@/components/ListItemButton";
import ListItemIcon from "@/components/ListItemIcon";
import ListItemText from "@/components/ListItemText";

import "./SidebarLink.scss";

interface SidebarLinkProps extends Omit<LinkProps, "children"> {
  icon?: ReactNode;
  text: string;
}

const SidebarLink = ({ icon, text, ...rest }: SidebarLinkProps) => {
  return (
    <ListItem className="sidebar-link">
      <ListItemButton
        as={Link}
        className="sidebar-link__button"
        activeProps={{ className: "sidebar-link__button--active" }}
        {...rest}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarLink;
