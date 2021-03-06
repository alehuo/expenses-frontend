import * as React from "react";
import Status from "../components/Status";
import BtnRow from "../components/BtnRow";
import Title from "../components/Title";
import styles from "./../styles/Common.module.scss";
import { TransactionView } from "../components/TransactionView";
import classNames from "classnames";

const Home = () => (
  <>
    <Status value={-500.95} />
    <BtnRow>
      <button
        className={classNames({
          [styles.btn]: true,
          [styles.plus]: true,
          [styles.elevated]: true
        })}
      >
        + Income
      </button>
      <button
        className={classNames({
          [styles.btn]: true,
          [styles.minus]: true,
          [styles.elevated]: true
        })}
      >
        &minus; Expense
      </button>
    </BtnRow>
    <Title title="Recent activity" />
    <div className={styles["transaction-wrapper-home"]}>
      <TransactionView />
    </div>
  </>
);

export default Home;
