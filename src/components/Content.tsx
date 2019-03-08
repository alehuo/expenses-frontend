import * as React from "react";
import styles from "./Content.module.scss";
import classNames from "classnames";

const Content = ({ children }: { children: any }) => (
  <div
    className={classNames({
      [styles.content]: true,
      boxshadow: true
    })}
  >
    {children}
  </div>
);

export default Content;
