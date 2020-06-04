import React from "react";

const ExpenseForm = ({
    name,
    amount,
    edit,
    handleExpense,
    handleAmount,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="expense"
                name="expense"
                placeholder="Expense Name"
                value={name}
                onChange={handleExpense}
            />
            <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Amount"
                value={amount}
                onChange={handleAmount}
            />
            <button type="submit">{edit ? "Edit" : "Add"}</button>
        </form>
    );
};

export default ExpenseForm;
