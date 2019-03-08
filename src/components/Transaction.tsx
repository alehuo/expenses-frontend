import * as React from "react";
import classnames from "classnames";

export interface Transaction {
  id: number;
  value: number;
  date: Date;
}

interface Props {
  transaction: Transaction;
}

const SingleTransaction: React.SFC<Props> = ({ transaction }) => (
  <div className="transaction">
    <span
      className={classnames({ value: true, negative: transaction.value < 0 })}
    >
      {transaction.value}&euro;
    </span>
    <span className="date">{transaction.date.toISOString()}</span>
  </div>
);

export { SingleTransaction };
