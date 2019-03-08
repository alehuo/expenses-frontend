import * as React from "react";
import { Transaction, SingleTransaction } from "../components/Transaction";

export interface TransactionsProps {
  transactions: Transaction[];
}

const transactionList: Transaction[] = [
  {
    id: 1,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 2,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 3,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 4,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 5,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 6,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 7,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 8,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 9,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 10,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 11,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    id: 12,
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  }
];

const TransactionView = () => (
  <div className="transactions">
    {transactionList &&
      transactionList.map(transaction => (
        <SingleTransaction key={transaction.id} transaction={transaction} />
      ))}
  </div>
);

export { TransactionView };
