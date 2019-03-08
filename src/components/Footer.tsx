import * as React from "react";
import styles from "./Footer.module.scss";
import moment from "moment";

const Footer = () => (
  <div className={styles.footer}>Copyright &copy; {moment().format("YYYY")} alehuo</div>
);

export default Footer;
