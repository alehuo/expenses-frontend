import * as React from "react";
import classNames from "classnames";
import styles from "./Status.module.scss";

interface StatusProps {
  value: number;
}

const Status = ({ value }: StatusProps) => (
  <div className={styles.status}>
    <div
      className={classNames({
        [styles.money]: true,
        [styles["money-negative"]]: value < 0,
        [styles["money-positive"]]: value >= 0
      })}
    >
      {value} &euro;
    </div>
  </div>
);

export default Status;
