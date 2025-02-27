import classNames from "classnames";
import { icons, LucideProps } from "lucide-react";
import type { FC } from "react";

import "./Icon.scss";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon: FC<IconProps> = ({ name, className, ...rest }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      className={classNames("icon", className)}
      {...rest}
    />
  );
};

export default Icon;
