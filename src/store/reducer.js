import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }

    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }

    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      }

    case actionTypes.REMOVE_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload
      }

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat(state.counter)
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
