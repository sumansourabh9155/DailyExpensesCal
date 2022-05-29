import "./Expense.css";

import ExpenseCard from "../Background/ExpenseCard";
import React from "react";
import { useState } from "react";

const Expense = (props) => {
  const [title, setTitle] = useState(props.title);

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  const clickhandel = () => {
    setTitle("Updated!");
    return console.log("clicked");
  };
  return (
    <ExpenseCard className="expense-item">
      <div>
        <div>{month}</div>
        <div>{date}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickhandel}></button>
      </div>
    </ExpenseCard>
  );
};
export default Expense;
