import * as React from "react";
import Status from "../components/Status";
import BtnRow from "../components/BtnRow";
import Title from "../components/Title";
import { TransactionView } from "../components/TransactionView";

const Home = () => (
  <>
    <Status value={-500.95} />
    <BtnRow>
      <button className="btn plus">+ Income</button>
      <button className="btn minus">&minus; Expense</button>
    </BtnRow>
    <Title title="Recent activity" />
    <TransactionView />
  </>
);

export default Home;
