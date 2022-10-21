/** @format */
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [collapseFormClass, setCollapseFormClass] = useState(
    'new-expense__controls'
  );
  const [alignExpenseBtn, setAlignExpenseBtn] = useState(
    'new-expense__actions'
  );

  const collapseFormCheck = () => {
    if (collapseFormClass.includes('collapse-form')) {
      setCollapseFormClass('new-expense__controls');
      setAlignExpenseBtn('new-expense__actions');
    } else {
      setCollapseFormClass('new-expense__controls collapse-form');
      setAlignExpenseBtn('new-expense__actions collapse-center');
    }
  };
  const getTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const getAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const getDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    collapseFormCheck();

    props.onSaveExpenseData(expenseData);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    console.log('cancelHandler');

    collapseFormCheck();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={collapseFormClass}>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={getTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={getAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={getDateHandler}
          />
        </div>
      </div>
      <div className={alignExpenseBtn}>
        <button type="cancel" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
