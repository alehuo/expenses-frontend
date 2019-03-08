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
      <span className="link-text">Home</span>
      <span className="bottom-dot" />
    </NavLink>
    <NavLink
      className={styles["nav-link"]}
      activeClassName="selected"
      to="/history"
    >
      <span className="link-text">History</span>
      <span className="bottom-dot" />
    </NavLink>
    <NavLink
      className={styles["nav-link"]}
      activeClassName="selected"
      to="/profile"
    >
      <span className="link-text">Profile</span>
      <span className="bottom-dot" />
    </NavLink>
  </nav>
);

export default Nav;
