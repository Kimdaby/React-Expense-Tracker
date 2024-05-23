import "./App.css";
import React from "react";
import { useState } from "react";
import ExpenseList from "./components/ExpenseComponent/ExpenseComponent";
import Form from "./components/FormComponent/FormComponent";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addItem = (data) => {
    const newItem = {
      id: expenses.length + 1,
      ...data,
      amount: parseFloat(data.amount),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newItem]);
  };

  const deleteItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <Form addExpense={addItem} />
      <ExpenseList items={expenses} deleteItem={deleteItem} />
    </>
  );
}

export default App;
