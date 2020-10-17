import axios from 'axios';

const KEY = 'AIzaSyBgP9dDVLN96-GQUjEwkGR3UEJRxmQlBUQ';
const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + KEY;
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + KEY;

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const auth = (userData, authType) => {
  return dispatch => {
    // Update UI Loading
    dispatch(authStart());

    const URL = authType === 'signIn' ? SIGN_IN_URL : SIGN_UP_URL;

    axios.post(URL, {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res)
        dispatch(authSuccess())
      })
      .catch(err => {
        console.error(err);
        dispatch(authSuccess());
      })
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
