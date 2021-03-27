import { 
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from './authActions';


const initialState = {
  user: null,
  token: null,
  isLoggedIn: false
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_SUCCESS: {
      const { token, user } = action.payload;

      return {
        ...state,
        user,
        token,
        isLoggedIn: true,
      }
    }
    case USER_LOGIN_SUCCESS: {
      const { token, user } = action.payload;
      
      return {
        ...state,
        user,
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