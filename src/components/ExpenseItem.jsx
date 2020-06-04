import React from "react";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
    return (
        <li>
            <div>
                <span>{expense.name}, </span>
                <span>${expense.amount}</span>
            </div>
            <button type="submit" onClick={() => handleEdit(expense.id)}>
                Edit
            </button>
            <button type="submit" onClick={() => handleDelete(expense.id)}>
                Delete
            </button>
        </li>
    );
};

export default ExpenseItem;
