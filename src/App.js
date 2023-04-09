import React, { useState } from "react";
import NewExpense from "./components/new_expnse/NewExpense";
import Expenses from "./components/expense/Expenses";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseData, setExpenses] = useState(DUMMY_EXPENSE);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const data = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    setExpenses([data, ...expenseData]);
  };
  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
      <Expenses item={expenseData}></Expenses>
    </div>
  );
}

export default App;
