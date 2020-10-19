import * as actionTypes from '../actions/auth.action';
import { updateStateObject } from "../util";

const initialState = {
  token: null,
  userId: null,
  error: null,
  isLoading: false
}

// Reducer Helpers
const authSuccess = (state, action) => {
  return updateStateObject(state, {
    error: null,
    isLoading: false,
    token: action.payload.token,
    userId: action.payload.userId
  });
}

const authError = (state, action) => {
  return updateStateObject(state, {
    error: action.payload,
    isLoading: false,
    token: null,
    userId: null
  });
}

const authLogout = (state) => {
  return updateStateObject(state, {
    token: null,
    userId: null,
    error: null,
    isLoading: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateStateObject(state, { error: null, isLoading: true });
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authError(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default: return { ...state }
  }
}

export default reducer;
