import * as actionTypes from '../actions';

const initialState = {
  counter: 0
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

    default:
      return state;
  }
}

export default reducer;
