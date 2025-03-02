import classNames from "classnames";
import { icons, LucideProps } from "lucide-react";

import "./Icon.scss";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon = ({ name, className, ...rest }: IconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      className={classNames("icon", className)}
      {...rest}
    />
  );
};

export default Icon;
