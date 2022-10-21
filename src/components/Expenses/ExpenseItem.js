/** @format */
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const updateTitleHandler = () => {
  //   setTitle((prevTitle) => props.Title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p className="expense-item__price">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
