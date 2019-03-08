import * as React from "react";
import styles from "./Title.module.scss";

interface Props {
  title: string;
}

const Title: React.SFC<Props> = ({ title }) => (
  <div className={styles.title}>{title}</div>
);

export default Title;
