import axios from 'axios';

const KEY = 'AIzaSyBgP9dDVLN96-GQUjEwkGR3UEJRxmQlBUQ';
const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + KEY;
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + KEY;

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';

export const auth = (userData, authType, history) => {
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
        const { idToken, localId, expiresIn } = res.data;
        // Saving JWT in LS
        localStorage.setItem('user', JSON.stringify({
          idToken,
          localId,
          expiresIn: new Date(new Date().getTime() + (expiresIn * 1000))
        }))

        dispatch(startLogoutCountdown(expiresIn))
        dispatch(authSuccess({ token: idToken, userId: localId }));
        history.push('/');
      })
      .catch(err => {
        console.error(err);
        dispatch(authFail(err));
      })
  }
}

export const authLogout = () => {
  localStorage.removeItem('user')
  return {
    type: AUTH_LOGOUT
  }
}

export const setAuthRedirectPath = (redirectPath) => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    payload: redirectPath
  }
}

export const authAutoLogin = () => {
  return dispatch => {

    const lsUser = JSON.parse(localStorage.getItem('user'));
    if (!lsUser) {
      dispatch(authLogout())
    } else {
      const expirationDate = new Date(lsUser.expiresIn)

      // Checking if token is valid
      if (expirationDate > new Date()) {
        const token = lsUser.idToken;
        const userId = lsUser.localId;

        const remainingTime = new Date((expirationDate.getTime() - new Date().getTime()) / 1000).getTime();
        dispatch(startLogoutCountdown(remainingTime));
        dispatch(authSuccess({ token, userId }))
      } else {
        dispatch(authLogout())
      }
    }
  }

}

const startLogoutCountdown = (expiresIn) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout())
    }, expiresIn * 1000)
  };
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
