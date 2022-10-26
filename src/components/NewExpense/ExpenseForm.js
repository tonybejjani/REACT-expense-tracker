/** @format */
import React, { useState, useRef } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // const getTitleHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };

  // const getAmountHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };

  // const getDateHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredtitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" ref={amountInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
