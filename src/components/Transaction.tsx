import * as React from "react";

export interface Transaction {
  value: number;
  date: Date;
}

interface Props {
  transaction: Transaction;
}

const SingleTransaction: React.SFC<Props> = ({ transaction }) => (
  <div className="transaction">
    <span className={"value " + (transaction.value < 0 && "negative")}>
      {transaction.value}&euro;
    </span>
    <span className="date">{transaction.date.toISOString()}</span>
  </div>
);

export { SingleTransaction };
