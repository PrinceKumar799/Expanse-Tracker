import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [formVisibilty, setFormVisibility] = useState(false);

  const addNewExpenseHandler = (enteredData) => {
    props.onSaveExpenseData({ ...enteredData });
    setFormVisibility(false);
  };

  const cancleNewExpense = () => {
    setFormVisibility(false);
  };

  const showFormButtonHandler = (e) => {
    e.preventDefault();
    setFormVisibility(true);
  };
  let formContent = (
    <button onClick={showFormButtonHandler}>Add New Expense</button>
  );
  if (formVisibilty) {
    formContent = (
      <ExpenseForm
        onAddNewExpense={addNewExpenseHandler}
        onCancleNewExpense={cancleNewExpense}
      ></ExpenseForm>
    );
  }
  return <div className="new-expense">{formContent}</div>;
}

export default NewExpense;
