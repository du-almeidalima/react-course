import * as counterActions from '../actions/counter.actions';
import { updateStateObject } from "../helper";

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case counterActions.INC_COUNTER:
      return updateStateObject(state, {counter: state.counter + 1})

    case counterActions.DEC_COUNTER:
      return updateStateObject(state, {counter: state.counter - 1})

    case counterActions.ADD_COUNTER:
      return updateStateObject(state, {counter: state.counter + action.payload})

    case counterActions.REMOVE_COUNTER:
      return updateStateObject(state, {counter: state.counter - action.payload})

    default:
      return state;
  }
}

export default reducer;
