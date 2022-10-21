/** @format */
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
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
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
