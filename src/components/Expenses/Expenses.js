/** @format */
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onSelectYear={selectedYearHandler}
        />

        {props.items.map((expenseItem) => (
          <ExpenseItem
            date={expenseItem.date}
            title={expenseItem.title}
            amount={expenseItem.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
