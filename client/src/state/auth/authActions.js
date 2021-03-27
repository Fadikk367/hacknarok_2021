import axios from 'api/axiosInstance';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';


export const login = credentials => async dispatch => {
  try {
    const res = await axios.post('/auth/login', credentials);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch(err) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: err.message,
    });
  }
}

export const register = userAttributes => async dispatch => {
  try {
    const res = await axios.post('/auth/register', userAttributes);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch(err) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: err.message,
    });
  }
}

export const logout = () => {
  return ({
    type: USER_LOGOUT,
  });
}