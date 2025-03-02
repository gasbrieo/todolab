import classNames from "classnames";
import { offset } from "@floating-ui/react";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Popover from "@/components/Popover";
import Typography from "@/components/Typography";
import { usePopover } from "@/hooks/usePopover";

import "./SidebarAccount.scss";

interface SidebarAccountProps {
  avatarUrl?: string;
  className?: string;
  email: string;
  name: string;
  onLogout?: () => void;
}

const SidebarAccount = ({ avatarUrl, className, email, name, onLogout }: SidebarAccountProps) => {
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
            src={avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
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
        <Button
          variant="outlined"
          startIcon={<Icon name="LogOut" />}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Popover>
    </>
  );
};

export default SidebarAccount;
