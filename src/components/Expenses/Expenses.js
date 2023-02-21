import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

/* 1.- Pasing data using props */
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterByYear = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    /* Using a custom component, className will pass act as a normal prop */
    <Card className='expenses'>
      <ExpensesFilter selected={filterYear} onYearChange={filterByYear} />
      {/* Everything inside between the open and close tag of a custom component,
      can be get as a prop in the component js file, using 'props.children'*/}

      {/* 3.- Rendering list of data */}
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
