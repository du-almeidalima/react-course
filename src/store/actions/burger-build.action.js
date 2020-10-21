import burgerBuilderAPI from '../../api/burger-builder.api';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS_ERROR = 'FETCH_INGREDIENTS_ERROR';

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

export const setIngredients = (ingredients) => {
  return {
    type: SET_INGREDIENTS,
    payload: ingredients
  }
}

export const fetchIngredients = () => {
  return dispatch => {
    burgerBuilderAPI.get('/ingredients.json')
        .then(res => {
          dispatch(setIngredients(res.data));
        })
        .catch( err => {
          console.error('[BurgerBuilder]: ', err);
          dispatch(fetchIngredientsError());
        });
  }
}

export const fetchIngredientsError = () => {
  return { type: FETCH_INGREDIENTS_ERROR }
}
