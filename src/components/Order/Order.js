import React from 'react';
import OrderStyle from './Order.module.css';

const Order = (props) => {
  return (
    <div className={OrderStyle.OrderWrapper}>
      <span>Ingredients</span>
      <span>Price: <strong>R$5.00</strong></span>
    </div>
  )
}

export default Order;
