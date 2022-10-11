/** @format */
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear((prevFilteredYear) => selectedYear);
  };

  const filteredItems = props.items.filter(
    (expense) =>
      expense.date.getFullYear().toString() === filteredYear.toString()
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          // defaultYear={filteredYear}
          onSelectYear={selectedYearHandler}
          selected={filteredYear}
        />

        {filteredItems.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
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
