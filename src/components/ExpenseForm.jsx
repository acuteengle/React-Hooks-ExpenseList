import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ExpenseForm = ({
  name,
  amount,
  edit,
  handleExpense,
  handleAmount,
  handleSubmit,
}) => {
  const styles = {
    inputSpacing: {
      margin: "5px 0px",
    },
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="expense"
        name="expense"
        placeholder="Expense Name"
        value={name}
        onChange={handleExpense}
        className="form-control"
        style={styles.inputSpacing}
      />
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Amount"
        value={amount}
        onChange={handleAmount}
        className="form-control"
        style={styles.inputSpacing}
      />
      <button type="submit" className="btn btn-dark">
        {edit ? "Edit" : "Add"}{" "}
      </button>
    </form>
  );
};

export default ExpenseForm;
