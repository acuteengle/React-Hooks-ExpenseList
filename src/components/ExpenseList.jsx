import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, handleEdit, handleDelete, handleClear }) => {
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}

      {expenses.length > 0 && (
        <button onClick={handleClear} className="btn btn-danger">
          Clear All Expenses
        </button>
      )}
    </div>
  );
};

export default ExpenseList;
