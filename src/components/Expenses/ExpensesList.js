/** @format */

import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          date={expenseItem.date}
          title={expenseItem.title}
          amount={expenseItem.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
