/** @format */
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // let yearPick;
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // const [yearlyExpenses, setYearlyExpenses] = useState(expenses);

  // const addExpensePerYearHandler = (year) => {
  //   yearPick = year;
  //   setYearlyExpenses(
  //     expenses.filter((expense) => expense.date.getFullYear() === year)
  //   );
  // };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses
        expenses={expenses}
        // onFilterYear={addExpensePerYearHandler}
      />
    </div>
  );
};

export default App;
