import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Other way:
  // const [userInput, setUserInput] = useState({
  //   enteredItem: "",
  //   enteredPrice: "",
  //   enteredDate: ""
  // });
  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
    // when state update depends on previous state:
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredItem: event.target.value };
    // });
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // alternative shared change handler
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier == "item") {
  //     setEnteredItem(value);
  //   } else if (identifier == "price") {
  //     setEnteredPrice(value);
  //   } else {
  //     setEnteredDate(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      item: enteredItem,
      price: +enteredPrice,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredItem("");
    setEnteredPrice("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Item</label>
          <input
            type="Text"
            // pang alternative dun sa change handler
            // onChange={(event) => inputChangeHandler("item", event.target.value)}
            value={enteredItem}
            onChange={itemChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            // onChange={(event) => inputChangeHandler("price", event.target.value)}
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023-12-31"
            // onChange={(event) => inputChangeHandler("date", event.target.value)}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
