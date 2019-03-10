import React, { useState } from "react";
import styles from "./UserMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import common from "./../styles/Common.module.scss";

interface Props {}

const UserMenu: React.SFC<Props> = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={classNames({
        [styles.userMenu]: true,
        [styles.userMenuOpen]: isOpen
      })}
      onClick={() => setOpen(!isOpen)}
    >
      <div className={styles.userMenuHeader}>
        <div
          className={classNames({
            [styles.userIcon]: true,
            [styles.userIconOpen]: isOpen
          })}
        />{" "}
        <FontAwesomeIcon
          className={classNames({
            [styles.menuArrow]: true,
            [styles.menuArrowOpen]: isOpen
          })}
          icon={isOpen ? "angle-down" : "angle-up"}
        />
      </div>
      {isOpen && (
        <ul className={styles.menuItems}>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export { UserMenu };
