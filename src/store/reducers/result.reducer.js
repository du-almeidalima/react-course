import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.STORE_RESULT:
      console.log(action)
      return {
        ...state,
        results: state.results.concat(action.payload)
      }

    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter(( _ , index) => index !== action.payload);

      return {
        ...state,
        results: updatedResults
      }

    default:
      return state;
  }
}

export default reducer;
