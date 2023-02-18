import "./Expenses.css";

import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const items = props.items;

  return (
    /* Using a custom component, className will pass act as a normal prop */
    <Card className="expenses">
      {/* Everything inside between the open and close tag of a custom component,
          can be get as a prop in the component js file, using 'props.children'*/}
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
}

export default Expenses;
