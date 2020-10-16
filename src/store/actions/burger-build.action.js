export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const addIngredient = (ingredientKey) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredientKey
  }
}

export const removeIngredient = (ingredientKey) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredientKey
  }
}
