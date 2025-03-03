import type { CSSProperties } from "react";
import { LogOutIcon } from "lucide-react";
import { offset } from "@floating-ui/react";

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import ListItemAvatar from "@/components/ListItemAvatar";
import ListItemButton from "@/components/ListItemButton";
import ListItemText from "@/components/ListItemText";
import Popover from "@/components/Popover";
import { usePopover } from "@/hooks/usePopover";

import "./SidebarAccount.scss";

interface SidebarAccountPopoverProps {
  floatingStyles: CSSProperties;
  isOpen?: boolean;
  email: string;
  name: string;
  onLogout?: () => void;
  setFloating: (node: HTMLElement | null) => void;
}

const SidebarAccountPopover = ({ email, floatingStyles, isOpen, name, onLogout, setFloating }: SidebarAccountPopoverProps) => {
  return (
    <Popover
      isOpen={isOpen}
      ref={setFloating}
      style={floatingStyles}
    >
      <List>
        <ListItem className="sidebar-account-popover__info">
          <ListItemAvatar>
            <Avatar>
              <img
                alt={name}
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="sidebar-account-popover__text"
            primary={name}
            secondary={email}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className="sidebar-account-popover__action">
          <Button
            size="small"
            variant="outlined"
            startIcon={
              <LogOutIcon
                width="1em"
                height="1em"
              />
            }
            onClick={onLogout}
          >
            Logout
          </Button>
        </ListItem>
      </List>
    </Popover>
  );
};

interface SidebarAccountProps {
  name: string;
  email: string;
  onLogout?: () => void;
}

const SidebarAccount = ({ name, email, onLogout }: SidebarAccountProps) => {
  const { isOpen, toggleIsOpen, refs, floatingStyles } = usePopover({
    placement: "right-start",
    middleware: [offset(18)],
  });

  return (
    <>
      <List className="sidebar-account">
        <ListItem className="sidebar-account__item">
          <ListItemButton
            className="sidebar-account__button"
            ref={refs.setReference}
            onClick={toggleIsOpen}
          >
            <ListItemAvatar>
              <Avatar>
                <img
                  alt={name}
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className="sidebar-account__text"
              primary={name}
              secondary={email}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <SidebarAccountPopover
        floatingStyles={floatingStyles}
        isOpen={isOpen}
        email={email}
        name={name}
        onLogout={onLogout}
        setFloating={refs.setFloating}
      />
    </>
  );
};

export default SidebarAccount;
