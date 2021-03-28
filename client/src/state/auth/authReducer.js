import { 
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from './authActions';


const initialState = {
  token: null,
  isLoggedIn: false,
  firstName: null,
  lastName: null,
  login: null,
  skills: {},
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_SUCCESS: {
      const { token, firstName, lastName, login, skills } = action.payload;

      return {
        ...state,
        firstName,
        lastName,
        login,
        skills,
        token,
        isLoggedIn: true,
      }
    }
    case USER_LOGIN_SUCCESS: {
      const { token, firstName, lastName, login, skills } = action.payload;
      localStorage.setItem('token', token);

      return {
        ...state,
        firstName,
        lastName,
        login,
        skills,
        token,
        isLoggedIn: true,
      }
    }
    case USER_LOGOUT: {
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
      }
    }
    default:
      return state;
  }
}

export default authReducer;