import classNames from "classnames";

import Typography from "@/components/Typography";

import "./SidebarAccount.scss";

interface SidebarAccountProps {
  avatarUrl?: string;
  className?: string;
  email: string;
  name: string;
  onClick?: () => void;
}

const SidebarAccount = ({ avatarUrl, className, email, name, onClick }: SidebarAccountProps) => {
  const defaultAvatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${name}`;

  return (
    <button
      className={classNames("sidebar-account", className)}
      onClick={onClick}
    >
      <div className="sidebar-account__avatar">
        <img
          alt={name}
          src={avatarUrl || defaultAvatarUrl}
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
  );
};

export default SidebarAccount;
