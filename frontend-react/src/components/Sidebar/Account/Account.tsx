import classNames from "classnames";
import type { FC } from "react";

import Typography from "@/components/Typography";

import "./Account.scss";

interface AccountProps {
  className?: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

const Account: FC<AccountProps> = ({ className, name, email, avatarUrl }) => {
  return (
    <li className={classNames("account", className)}>
      <div className="account__button">
        <div className="account__avatar">
          <img
            src={avatarUrl || "/default-avatar.png"}
            alt={name}
          />
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
      </div>
    </li>
  );
};

export default Account;
