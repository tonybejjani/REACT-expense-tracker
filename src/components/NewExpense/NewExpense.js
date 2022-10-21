/** @format */
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setIsEdit(false);
  };

  const startEditingHandler = () => {
    setIsEdit(true);
  };

  const stopEditingHandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && (
        <button type="button" className="" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEdit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
