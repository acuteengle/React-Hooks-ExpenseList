import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, handleEdit, handleDelete, handleClear }) => {
    return (
        <div>
            <ul>
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
            </ul>
            {expenses.length > 0 && (
                <button onClick={handleClear}>Clear Expenses</button>
            )}
        </div>
    );
};

export default ExpenseList;
