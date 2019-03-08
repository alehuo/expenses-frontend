import * as React from "react";

const Btn = ({
  className,
  children,
  onClick
}: {
  className?: string;
  children: any;
  onClick?: () => void;
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Btn;
