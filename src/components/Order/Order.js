import React from 'react';
import OrderStyle from './Order.module.css';

const Order = (props) => {
  const ingredientsArr = Object.entries(props.ingredients);
  const ingredientsTitleTemplate = ingredientsArr.map(([key, value], index) => {
    return (
      <span className={OrderStyle.OrderItem} key={key}>
        {key}({value})
      </span>
    )
  })

  return (
    <div className={OrderStyle.OrderWrapper}>
      <div className={OrderStyle.OrderItemsWrapper}>{ingredientsTitleTemplate}</div>
      <strong className={OrderStyle.Price}>R${props.price.toFixed(2)}</strong>
    </div>
  )
}

export default Order;
