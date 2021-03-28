import { 
  GET_HELP_REQUESTS_SECCESS,
  ADD_HELP_REQUEST_SECCESS,
  GET_CATEGORIES_SECCESS,
  START_REQUEST_REPLY,
  END_REQUEST_REPLY,
} from './helpRequestActions';


const initialState = {
  categories: [],
  requests: [],
  reply: {
    author: null,
    requestID: null
  }
}

function helpRequestReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HELP_REQUESTS_SECCESS: {
      const helpRequests = action.payload;
      console.log(helpRequests);
      return {
        ...state,
        requests: [...helpRequests]
      }
    }
    case ADD_HELP_REQUEST_SECCESS: {
      const addedHelpRequest = action.payload;
      
      return {
        ...state,
        requests: [addedHelpRequest, ...state.requests]
      }
    }
    case GET_CATEGORIES_SECCESS: {
      const categories = action.payload;
      
      return {
        ...state,
        categories,
      }
    }
    case START_REQUEST_REPLY: {
      const { author, requestId } = action.payload;

      return {
        ...state,
        reply: {
          author,
          requestId,
        }
      }
    }
    case END_REQUEST_REPLY: {
      return {
        ...state,
        reply: {
          author: null,
          requestId: null,
        }
      }
    }
    default:
      return state;
  }
}

export default helpRequestReducer;