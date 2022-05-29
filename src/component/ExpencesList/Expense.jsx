import "./Expense.css";

import ExpenseCard from "../Background/ExpenseCard";

const Expense = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <ExpenseCard className="expense-item">
      <div>
        <div>{month}</div>
        <div>{date}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </ExpenseCard>
  );
};
export default Expense;
