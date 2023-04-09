import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }
  if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        ></ExpenseItem>
      );
    });
  }
  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
