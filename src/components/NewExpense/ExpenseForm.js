import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    titleInput: "",
    amountInput: "",
    dateInput: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, titleInput: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amountInput: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    /* 2.- Set a function instead of a simple value when depends on the previous state */
    setUserInput((prevState) => {
      return { ...prevState, dateInput: event.target.value };
    });
  };

  const submitHandler = (event) => {
    /* 3.- Prevent page reload when using 'submit' in forms */
    event.preventDefault();

    /* 3.- Child-parent communication */
    props.onFormSubmit(userInput);

    /* Clear all inputs */
    setUserInput({
      titleInput: "",
      amountInput: "",
      dateInput: "",
    });
  };

  return (
    /* 3.- Submit form */
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='form-title'>Title</label>
          <input
            type='text'
            id='form-title'
            name='title-input'
            /* 3.- Two-way binding */
            value={userInput.titleInput}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='form-amount'>Amount</label>
          <input
            type='number'
            id='form-amount'
            name='amount-input'
            value={userInput.amountInput}
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
            required
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='form-date'>Date</label>
          <input
            type='date'
            id='form-date'
            name='date-input'
            min='2019-01-01'
            max='2022-12-31'
            value={userInput.dateInput}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
