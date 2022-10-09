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
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
        {/* <button onClick={updateTitleHandler}>Update title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
