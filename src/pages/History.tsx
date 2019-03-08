import * as React from "react";
import Title from "../components/Title";
import { TransactionView } from "../components/TransactionView";
import styles from "./../styles/Common.module.scss";

const History = () => (
  <>
    <Title title="History" />
    <div className={styles["transaction-wrapper-history"]}>
      <TransactionView />
    </div>
  </>
);
export default History;
