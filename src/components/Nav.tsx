import * as React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="nav-link" activeClassName="selected" to="/home">
        <span className="link-text">Home</span>
        <span className="bottom-dot"/>
      </NavLink>
      <NavLink className="nav-link" activeClassName="selected" to="/history">
        <span className="link-text">History</span>
        <span className="bottom-dot"/>
      </NavLink>
      <NavLink className="nav-link" activeClassName="selected" to="/profile">
        <span className="link-text">Profile</span>
        <span className="bottom-dot"/>
      </NavLink>
    </div>
  );
};

export default Nav;
