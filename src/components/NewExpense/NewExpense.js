import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  /* 3.- Child-parent communication */
  const submitExpense = (expense) => {
    const createdExpense = {
      ...expense,
      dateInput: new Date(expense.dateInput),
      id: Math.random().toString(),
    };

    props.onExpenseAdded(createdExpense);
  };

  return (
    <div className='new-expense'>
      {/* 3.- Child-parent communication */}
      <ExpenseForm onFormSubmit={submitExpense} />
    </div>
  );
};

export default NewExpense;
