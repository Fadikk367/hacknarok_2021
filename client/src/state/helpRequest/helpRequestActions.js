import axios from 'api/axiosInstance';

export const ADD_HELP_REQUEST_SECCESS = 'ADD_HELP_REQUEST_SECCESS';
export const ADD_HELP_REQUEST_FAILURE = 'ADD_HELP_REQUEST_FAILURE';
export const GET_HELP_REQUESTS_SECCESS = 'GET_HELP_REQUESTS_SECCESS';
export const GET_HELP_REQUESTS_FAILURE = 'GET_HELP_REQUESTS_FAILURE';
export const GET_CATEGORIES_SECCESS = 'GET_CATEGORIES_SECCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
export const START_REQUEST_REPLY = 'START_REQUEST_REPLY';
export const END_REQUEST_REPLY = 'END_REQUEST_REPLY';

export const addHelpRequest = (requestAttributes, helpType) => async dispatch => {
  console.log("hi from add");
  try {
    const res = await axios.post(`/api/resources/help-${helpType}`, requestAttributes);

    dispatch({
      type: ADD_HELP_REQUEST_SECCESS,
      payload: res.data,
    });
  } catch(err) {
    console.log(err.response.data);

    dispatch({
      type: ADD_HELP_REQUEST_FAILURE,
      payload: err.message,
    });
  }
}

export const getHelpRequests = (filters, type) => async dispatch => {
  let query = new URLSearchParams();

  if (Object.keys(filters).length !== 0) {
    if (filters.category !== -1) 
      query.append('category', filters.category);

    if (filters.tags.length !== 0) {
      for (const tag of filters.tags) {
        if (tag)
          query.append('tags', tag);
      }
    }
  }

  try {
    const res = await axios.get(`/api/resources/help-${type}?${query.toString()}`, filters);

    dispatch({
      type: GET_HELP_REQUESTS_SECCESS,
      payload: res.data,
    });
  } catch(err) {
    dispatch({
      type: GET_HELP_REQUESTS_FAILURE,
      payload: err.message,
    });
  }
}

export const getRequestCategoires = () => async dispatch => {
  try {
    const res = await axios.get('/api/resources/categories');

    dispatch({
      type: GET_CATEGORIES_SECCESS,
      payload: res.data.categories,
    });
  } catch(err) {
    dispatch({
      type: GET_CATEGORIES_FAILURE,
      payload: err.message,
    });
  }
}


export const replyStart = (author, requestId) => {
  return ({
    type: START_REQUEST_REPLY,
    payload: { author, requestId }
  });
}

export const replyEnd = () => {
  return ({
    type: END_REQUEST_REPLY
  });
}

export const sendMessage = message => async dispatch => {
  try {
    const res = await axios.post('/api/resources/messages', message);

    dispatch({
      type: GET_CATEGORIES_SECCESS,
      payload: res.data.categories,
    });
  } catch(err) {
    console.log(err);
    
    dispatch({
      type: GET_CATEGORIES_FAILURE,
      payload: err.message,
    });
  }
}