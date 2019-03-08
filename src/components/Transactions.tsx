import * as React from "react";
import { Transaction, SingleTransaction } from "../components/Transaction";

export interface TransactionsProps {
  transactions: Transaction[];
}

const transactionList: Transaction[] = [
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  },
  {
    date: new Date(2017, 1, 1, 12, 55, 0),
    value: -10.0
  }
];

const Transactions = () => (
  <div className="transactions">
    {transactionList &&
      transactionList.map(transaction => (
        <SingleTransaction transaction={transaction} />
      ))}
  </div>
);

export default Transactions;
