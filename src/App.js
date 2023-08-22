import Expenses from "./components/Expenses/Expenses";
import "./styles.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    date: new Date(2023, 8, 18),
    item: "Protein Shake",
    price: 1600.0
  },
  {
    id: "e2",
    date: new Date(2023, 9, 4),
    item: "Flowers",
    price: 1500.0
  },
  {
    id: "e3",
    date: new Date(2023, 7, 14),
    item: "Yabu",
    price: 1200.0
  },
  {
    id: "e4",
    date: new Date(2023, 7, 14),
    item: "Gnarly",
    price: 900.0
  }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expense) => {
    // should be depending on previous state!
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    //incorrect!: setExpenses(expense, ...INITIAL_EXPENSES);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
