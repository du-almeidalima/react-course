import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientStyle from './BurgerIngredient.module.css';

const burgerIngredient = props => {
  return createIngredientTemplate(props.type)
}

const createIngredientTemplate = ingredientType => {
  switch (ingredientType) {
    case 'brad-bottom':
      return <div className={burgerIngredientStyle.BreadBottom} />
    case 'meat':
      return <div className={burgerIngredientStyle.Meat} />
    case 'cheese':
      return <div className={burgerIngredientStyle.Cheese} />
    case 'bacon':
      return <div className={burgerIngredientStyle.Cheese} />
    case 'brad-top':
      return (
          <div className={burgerIngredientStyle.BreadTop}>
            <div className={burgerIngredientStyle.Seeds1} />
            <div className={burgerIngredientStyle.Seeds2} />
          </div>
      )
    default:
      return <span style={{color: 'red'}}>Invalid Ingredient</span>
  }
}
burgerIngredient.propType = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient;
