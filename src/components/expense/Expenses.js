import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [year, setYear] = useState();
  const handleFilter = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <>
      <Card className="expenses" onFilter={handleFilter}>
        <ExpensesFilter onFilter={handleFilter}></ExpensesFilter>{" "}
        <ExpensesList items={filteredExpense}></ExpensesList>
      </Card>
    </>
  );
}

export default Expenses;
