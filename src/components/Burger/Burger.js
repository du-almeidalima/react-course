import React from 'react';
import burgerStyle from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {

  // This code creates an list of ingredients based on type and the amount
  const ingredientsList = Object.entries(props.ingredients).reduce((acc, curr) => {
    const repeatedIngredients = [...Array(curr[1])].map((_, i) => (
        <BurgerIngredient key={curr[0] + i} type={curr[0]}/>
    ))

    return [...acc, ...repeatedIngredients];
  }, [])

  return (
      <div className={burgerStyle.Burger}>
        <BurgerIngredient type="bread-top" key='bread-top'/>
        {ingredientsList}
        <BurgerIngredient type="bread-bottom" key='bread-bottom'/>
      </div>
  )
}

export default burger;
