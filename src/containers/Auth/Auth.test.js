import reducer from "../../store/reducers/auth.reducer";
import * as actionTypes from '../../store/actions/auth.action';

describe('Auth Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      token: null,
      userId: null,
      error: null,
      isLoading: false,
      authRedirectPath: '/'
    }
  })

  it('should return initial state if unknown action is fired', function () {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should store the token on AUTH_SUCCESS action', function () {
    expect(reducer(initialState, {
      type: actionTypes.AUTH_SUCCESS,
      payload: {
        token: 'ABC123',
        userId: 'TEST_USER#123'
      }
    })).toEqual({
      ...initialState,
      token: 'ABC123',
      userId: 'TEST_USER#123'
    })
  });
})
