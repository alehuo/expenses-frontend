import * as React from "react";
import Title from "../components/Title";
import { TransactionView } from "../components/TransactionView";

const History = () => (
  <React.Fragment>
    <Title title="History" />
    <TransactionView />
  </React.Fragment>
);

export default History;
