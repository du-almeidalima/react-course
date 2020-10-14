import * as actionTypes from './action';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        persons: [
            ...state.persons,
            action.payload
        ]
      }

    case actionTypes.DELETE_PERSON:
      return {
        persons: state.persons.filter(p => p.id !== action.payload)
      }

    default: return state
  }
}

export default reducer;
