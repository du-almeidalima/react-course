export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const auth = (userData) => {
  return dispatch => {
    // Update UI Loading
    dispatch(authStart());

    return {

    }
  }
}

const authStart = () => {
  return {
    type: AUTH_START
  }
}

const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    payload: authData
  }
}

const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error
  }
}
