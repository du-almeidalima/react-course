import React from 'react';
import PizzaImageStyle from './PizzaImage.css';
import PizzaImageImg from '../../assets/img/pizza.jpg';

 const PizzaImage = () => {
  return (
    <div className={PizzaImageStyle.PizzaWrapper}>
      <img src={PizzaImageImg} className={PizzaImageStyle.PizzaImage}/>
    </div>
  )
}

export default PizzaImage;