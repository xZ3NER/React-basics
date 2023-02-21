import React from "react";

import "./ExpensesFilter.css";

/* 3.- Controlled component & stateless component */
const ExpensesFilter = (props) => {
  const changeYear = (event) => {
    props.onYearChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor="years-filter">Filter by year</label>
        <select id="years-filter" value={props.selected} onChange={changeYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
