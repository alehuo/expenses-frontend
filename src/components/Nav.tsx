import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./Nav.module.scss";
import { connect } from "react-redux";
import { RootState } from "../store";
import { UserMenu } from "./UserMenu";

interface Props {
  authenticated: boolean;
}

const Nav: React.SFC<Props> = ({ authenticated }) => (
  <nav className={styles.nav}>
    <NavLink
      className={styles["nav-link"]}
      activeClassName={styles.selected}
      to="/home"
    >
      <span className={styles.linkText}>Home</span>
      <span className={styles.bottomDot} />
    </NavLink>
    <NavLink
      className={styles["nav-link"]}
      activeClassName={styles.selected}
      to="/history"
    >
      <span className={styles.linkText}>History</span>
      <span className={styles.bottomDot} />
    </NavLink>
    {authenticated && (
      <div className={styles["nav-link"]}>
        <UserMenu />
      </div>
    )}
  </nav>
);

export { Nav };

const mapStateToProps = (state: RootState) => ({
  authenticated: state.auth.isAuthenticated
});

// @ts-ignore
const ConnectedNav = withRouter(connect(mapStateToProps)(Nav));

export default ConnectedNav;
