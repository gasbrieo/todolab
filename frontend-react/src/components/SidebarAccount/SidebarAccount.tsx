import classNames from "classnames";
import { offset } from "@floating-ui/react";

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Icon from "@/components/Icon";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import ListItemAvatar from "@/components/ListItemAvatar";
import ListItemText from "@/components/ListItemText";
import Popover from "@/components/Popover";
import Typography from "@/components/Typography";
import { usePopover } from "@/hooks/usePopover";

import "./SidebarAccount.scss";

interface SidebarAccountProps {
  className?: string;
  email: string;
  name: string;
  onLogout?: () => void;
}

const SidebarAccount = ({ className, email, name, onLogout }: SidebarAccountProps) => {
  const { isOpen, toggleIsOpen, refs, floatingStyles } = usePopover({
    placement: "right-start",
    middleware: [offset(18)],
  });

  return (
    <>
      <button
        className={classNames("sidebar-account", className)}
        ref={refs.setReference}
        onClick={toggleIsOpen}
      >
        <div className="sidebar-account__avatar">
          <img
            alt={name}
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
          />
        </div>
        <div className="sidebar-account__info">
          <Typography
            variant="body1"
            className="sidebar-account__name"
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            className="sidebar-account__email"
          >
            {email}
          </Typography>
        </div>
      </button>
      <Popover
        isOpen={isOpen}
        ref={refs.setFloating}
        style={floatingStyles}
      >
        <SidebarAccountPopover
          email={email}
          name={name}
          onLogout={onLogout}
        />
      </Popover>
    </>
  );
};

interface SidebarAccountPopoverProps {
  email: string;
  name: string;
  onLogout?: () => void;
}

const SidebarAccountPopover = ({ email, name, onLogout }: SidebarAccountPopoverProps) => {
  return (
    <>
      <List>
        <ListItem className="sidebar-account-popover__user-info">
          <ListItemAvatar>
            <Avatar>
              <img
                alt="Avatar"
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
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
            startIcon={<Icon name="LogOut" />}
            onClick={onLogout}
          >
            Logout
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default SidebarAccount;
