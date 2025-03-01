import classNames from "classnames";
import type { FC } from "react";

import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import Typography from "@/components/Typography";

import { useSidebar } from "../SidebarContext";

import "./Account.scss";

interface AccountProps {
  className?: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

const Account: FC<AccountProps> = ({ className, name, email, avatarUrl }) => {
  const { isCollapsed } = useSidebar();

  return (
    <li className={classNames("account", className)}>
      <div className="account__wrapper">
        <div className="account__avatar">
          <IconButton
            size="small"
            disabled={!isCollapsed}
          >
            <img
              src={avatarUrl || "/default-avatar.png"}
              alt={name}
            />
          </IconButton>
        </div>
        <div className="account__info">
          <Typography
            variant="body1"
            className="account__name"
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            className="account__email"
          >
            {email}
          </Typography>
        </div>
        <IconButton>
          <Icon name="EllipsisVertical"></Icon>
        </IconButton>
      </div>
    </li>
  );
};

export default Account;
