import * as resultActions from '../actions/result.actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case resultActions.SAVE_RESULT:
      console.log(action)
      return {
        ...state,
        results: state.results.concat(action.payload)
      }

    case resultActions.DELETE_RESULT:
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
