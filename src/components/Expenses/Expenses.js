/** @format */
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear((prevFilteredYear) => selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
