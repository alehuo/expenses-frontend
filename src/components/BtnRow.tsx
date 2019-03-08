import * as React from "react";
import styles from "./BtnRow.module.scss";

interface Props {
  children: any;
}

const BtnRow: React.SFC<Props> = ({ children }) => (
  <div className={styles["btn-row"]}>{children}</div>
);

export default BtnRow;
