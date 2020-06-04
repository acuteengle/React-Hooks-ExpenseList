import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Notification from "./components/Notification";
import uuid from "react-uuid";

function App() {
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
                "*Expense Name can't be an empty value and amount value has to be greater than zero"
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

    return (
        <div>
            <h1>Expenses</h1>
            <p>Total amount: ${totalAmount()}</p>
            {notification && <Notification text={notification} />}
            <ExpenseForm
                name={name}
                amount={amount}
                edit={edit}
                handleExpense={handleName}
                handleAmount={handleAmount}
                handleSubmit={handleSubmit}
            />
            <ExpenseList
                expenses={expenses}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleClear={handleClear}
            />
        </div>
    );
}

export default App;
