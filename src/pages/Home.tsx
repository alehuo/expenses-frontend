import * as React from "react";
import Status from "../components/Status";
import BtnRow from "../components/BtnRow";
import Btn from "../components/Btn";
import Title from "../components/Title";
import { TransactionView } from "../components/TransactionView";

const Home = () => (
  <React.Fragment>
    <Status value={-500.95} />
    <BtnRow>
      <Btn className="btn plus">+ Income</Btn>
      <Btn className="btn minus">&minus; Expense</Btn>
    </BtnRow>
    <Title title="Recent activity" />
    <TransactionView />
  </React.Fragment>
);

export default Home;
