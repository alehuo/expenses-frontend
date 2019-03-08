import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => (
  <nav className={styles.nav}>
    <NavLink
      className={styles["nav-link"]}
      activeClassName="selected"
      to="/home"
    >
      <span className={styles.linkText}>Home</span>
      <span className={styles.bottomDot} />
    </NavLink>
    <NavLink
      className={styles["nav-link"]}
      activeClassName="selected"
      to="/history"
    >
      <span className={styles.linkText}>History</span>
      <span className={styles.bottomDot} />
    </NavLink>
    <NavLink
      className={styles["nav-link"]}
      activeClassName="selected"
      to="/profile"
    >
      <span className={styles.linkText}>Profile</span>
      <span className={styles.bottomDot} />
    </NavLink>
  </nav>
);

export default Nav;
