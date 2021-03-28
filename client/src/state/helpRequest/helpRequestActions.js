import axios from 'api/axiosInstance';

export const ADD_HELP_REQUEST_SECCESS = 'ADD_HELP_REQUEST_SECCESS';
export const ADD_HELP_REQUEST_FAILURE = 'ADD_HELP_REQUEST_FAILURE';
export const GET_HELP_REQUESTS_SECCESS = 'GET_HELP_REQUESTS_SECCESS';
export const GET_HELP_REQUESTS_FAILURE = 'GET_HELP_REQUESTS_FAILURE';
export const GET_CATEGORIES_SECCESS = 'GET_CATEGORIES_SECCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';


export const addHelpRequest = requestAttributes => async dispatch => {
  try {
    const res = await axios.post('/api/resources/help-request', requestAttributes);

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

export const getHelpRequests = filters => async dispatch => {
  try {
    const res = await axios.get('/api/resources/help-request', filters);

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