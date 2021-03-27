import { 
  GET_HELP_REQUESTS_SECCESS,
  ADD_HELP_REQUEST_SECCESS,
} from './helpRequestActions';


const initialState = {
  requests: [],
}

function helpRequestReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HELP_REQUESTS_SECCESS: {
      const helpRequests = action.payload;

      return {
        ...state,
        requests: helpRequests
      }
    }
    case ADD_HELP_REQUEST_SECCESS: {
      const addedHelpRequest = action.payload;
      
      return {
        ...state,
        requests: [addedHelpRequest, ...state.requests]
      }
    }
    default:
      return state;
  }
}

export default helpRequestReducer;