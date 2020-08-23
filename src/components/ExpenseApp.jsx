import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Notification from "./Notification";

function ExpenseApp() {
  const [expenses, setExpenses] = useState([]);

  const [id, setID] = useState("");

  const [amount, setAmount] = useState("");

  const [name, setName] = useState("");

  const [edit, setEdit] = useState(false);

  const [notification, setNotification] = useState("");

  const handleAmount = (event) => {
    // console.log("amount changed", event.target.value);
    setAmount(event.target.value);
  };

  const handleName = (event) => {
    // console.log("expense changed", event.target.value);
    setName(event.target.value);
  };

  const handleEdit = (expenseId) => {
    const singleExpense = expenses.find((item) => item.id === expenseId);
    setEdit(true);
    setName(singleExpense.name);
    setAmount(singleExpense.amount);
    setID(singleExpense.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || amount === "" || amount <= 0) {
      setNotification(
        "Error: Name cannot be an empty and amount has to be greater than zero"
      );
    } else {
      const newExpense =
        id === ""
          ? { id: uuid(), name: name, amount: amount }
          : { id: id, name: name, amount: amount };
      if (edit) {
        const tempExpenses = expenses.map((e) =>
          e.id === id ? newExpense : e
        );
        setExpenses(tempExpenses);
      } else {
        setExpenses([...expenses, newExpense]);
      }
      setID("");
      setName("");
      setAmount("");
      setNotification("");
      setEdit(false);
    }
  };

  const handleDelete = (expenseId) => {
    const tempExpenses = expenses.filter((e) => e.id !== expenseId);
    setExpenses(tempExpenses);
  };

  const handleClear = () => {
    setExpenses([]);
  };

  const totalAmount = () => {
    return expenses.reduce((acc, curr) => {
      return acc + parseInt(curr.amount);
    }, 0);
  };

  //Sets default expenses on mount of this component
  useEffect(() => {
    setExpenses([
      { id: uuid(), name: "Lunch", amount: 25 },
      { id: uuid(), name: "Rent", amount: 500 },
      { id: uuid(), name: "Groceries", amount: 60 },
      { id: uuid(), name: "Gas", amount: 40 },
    ]);
  }, []);

  const styles = {
    canvas: {
      width: "80%",
      margin: "auto",
    },
    header: {
      textAlign: "center",
    },
    amount: {
      color: "#007d43",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    halfContainer: {
      width: "45%",
      backgroundColor: "#007d43",
      padding: 10,
      borderRadius: 5,
    },
    title: {
      color: "#f9f9f9",
    },
  };

  return (
    <div style={styles.canvas}>
      <h1 style={styles.header}>Expenses</h1>
      <h3 style={styles.header}>
        Total amount: <span style={styles.amount}>${totalAmount()}</span>
      </h3>

      <hr />
      <div style={styles.container}>
        <div style={styles.halfContainer}>
          <h4 style={styles.title}>Add an Expense</h4>
          <ExpenseForm
            name={name}
            amount={amount}
            edit={edit}
            handleExpense={handleName}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
          />
          {notification && <Notification text={notification} />}
        </div>
        <div style={styles.halfContainer}>
          <h4 style={styles.title}>Expense List</h4>
          <ExpenseList
            expenses={expenses}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpenseApp;
