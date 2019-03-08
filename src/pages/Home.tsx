import * as React from "react";
import Status from "../components/Status";
import BtnRow from "../components/BtnRow";
import Btn from "../components/Btn";
import Title from "../components/Title";
import Transactions from "../components/Transactions";

const Home = () => (
  <React.Fragment>
    <Status value={-500.95} />
    <BtnRow>
      <Btn className="btn plus">+ Income</Btn>
      <Btn className="btn minus">&minus; Expense</Btn>
    </BtnRow>
    <Title title="Recent activity" />
    <Transactions />
  </React.Fragment>
);

export default Home;
