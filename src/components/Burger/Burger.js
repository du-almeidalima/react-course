import React from 'react';
import burgerStyle from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const createIngredientsTemplate = ingredientsArr => {
  const mappedIngredients = ingredientsArr.reduce((acc, curr) => {
    const repeatedIngredients = [...Array(curr[1])].map((_, i) => (
        <BurgerIngredient key={curr[0] + i} type={curr[0]}/>
    ))

    return [...acc, ...repeatedIngredients];
  }, []);

  return mappedIngredients.length > 0
      ? mappedIngredients
      : <p>Start adding ingredients to your Burger!</p>
}

const burger = props => {

  // This code creates an list of ingredients based on type and the amount
  const ingredientsArr = Object.entries(props.ingredients)
  const ingredients = createIngredientsTemplate(ingredientsArr);

  return (
      <div className={burgerStyle.Burger}>
        <BurgerIngredient type="bread-top" key='bread-top'/>
        {ingredients}
        <BurgerIngredient type="bread-bottom" key='bread-bottom'/>
      </div>
  )
}

export default burger;
