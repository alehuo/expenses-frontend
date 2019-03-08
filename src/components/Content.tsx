import * as React from "react";
import styles from "./Content.module.scss";
import classNames from "classnames";

const Content = ({ children }: { children: any }) => (
  <div
    className={classNames({
      [styles.content]: true,
      [styles.boxShadow]: true
    })}
  >
    {children}
  </div>
);

export default Content;
