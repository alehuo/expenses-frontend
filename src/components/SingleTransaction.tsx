import * as React from "react";
import classnames from "classnames";
import moment from "moment";
import styles from "./SingleTransaction.module.scss";

export interface Transaction {
  id: number;
  value: number;
  date: string;
}

interface Props {
  transaction: Transaction;
}

const SingleTransaction: React.SFC<Props> = ({ transaction }) => (
  <div className={styles.transaction}>
    <span
      className={classnames({
        [styles.transactionValue]: true,
        [styles.negative]: transaction.value < 0
      })}
    >
      {transaction.value}&euro;
    </span>
    <span className={styles.transactionDate}>
      {moment(transaction.date).format("DD.MM.YYYY HH:mm")}
    </span>
  </div>
);

export { SingleTransaction };
