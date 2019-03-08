import * as React from "react";
import classNames from "classnames";

interface IStatusProps {
  value: number;
}

const Status = ({ value }: IStatusProps) => (
  <div className="status">
    <div
      className={classNames({
        money: true,
        "money-negative": value < 0,
        "money-positive": value >= 0
      })}
    >
      {value} &euro;
    </div>
  </div>
);

export default Status;
