import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpenseClicked, setNewExpenseClicked] = useState(false);

  const toggleClickHandler = () => {
    setNewExpenseClicked(!newExpenseClicked);
  };

  /* 3.- Child-parent communication */
  const submitExpense = (expense) => {
    const createdExpense = {
      ...expense,
      date: new Date(expense.date),
      id: Math.random().toString(),
    };

    props.onExpenseAdded(createdExpense);
  };

  return (
    <div className='new-expense'>
      {/* 3.- Child-parent communication */}
      {!newExpenseClicked && (
        <button onClick={toggleClickHandler}>Add New Expense</button>
      )}
      {newExpenseClicked && (
        <ExpenseForm
          onFormSubmit={submitExpense}
          onFormCancel={toggleClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
