import "./ExpenseCard.css";

function ExpenseCard(props) {
  const name = "card " + props.className;
  return <div className={name}>{props.children}</div>;
}
export default ExpenseCard;
