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
        <ExpenseItem
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          date={props.expenses[1].date}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
        />
        <ExpenseItem
          date={props.expenses[2].date}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          date={props.expenses[3].date}
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
