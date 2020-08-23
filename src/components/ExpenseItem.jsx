import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const styles = {
    expenseCard: {
      backgroundColor: "#f9f9f9",
      margin: "10px 0px",
      padding: 10,
      borderRadius: 5,
    },
    expenseText: {
      margin: "3px 0px",
    },
  };

  return (
    <div style={styles.expenseCard}>
      <p style={styles.expenseText}>
        <b>Expense:</b> {expense.name}
      </p>
      <p style={styles.expenseText}>
        <b>Amount:</b> ${expense.amount}
      </p>
      <button
        type="submit"
        className="btn btn-dark btn-sm m-1"
        onClick={() => handleEdit(expense.id)}
      >
        Edit
      </button>
      <button
        type="submit"
        className="btn btn-secondary btn-sm m-1"
        onClick={() => handleDelete(expense.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
