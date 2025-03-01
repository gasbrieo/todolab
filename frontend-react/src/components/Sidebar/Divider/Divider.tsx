import type { FC, HTMLAttributes } from "react";

import "./Divider.scss";

const Divider: FC<HTMLAttributes<HTMLHRElement>> = () => {
  return <hr className="divider" />;
};

export default Divider;
