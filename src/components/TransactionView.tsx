import * as React from "react";
import { Transaction, SingleTransaction } from "../components/SingleTransaction";
import { transactionList } from "../data";
import styles from "./TransactionView.module.scss";

export interface TransactionsProps {
  transactions: Transaction[];
}

const TransactionView = () => (
  <section className={styles["transaction-view"]}>
    {transactionList &&
      transactionList.map(transaction => (
        <SingleTransaction key={transaction.id} transaction={transaction} />
      ))}
  </section>
);

export { TransactionView };
