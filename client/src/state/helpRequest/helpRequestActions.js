import axios from 'api/axiosInstance';

export const ADD_HELP_REQUEST_SECCESS = 'ADD_HELP_REQUEST_SECCESS';
export const ADD_HELP_REQUEST_FAILURE = 'ADD_HELP_REQUEST_FAILURE';
export const GET_HELP_REQUESTS_SECCESS = 'GET_HELP_REQUESTS_SECCESS';
export const GET_HELP_REQUESTS_FAILURE = 'GET_HELP_REQUESTS_FAILURE';


export const addHelpRequest = requestAttributes => async dispatch => {
  console.log("hi from add");
  try {
    const res = await axios.post('/api/resources/help-request', requestAttributes);

    dispatch({
      type: ADD_HELP_REQUEST_SECCESS,
      payload: res.data,
    });
  } catch(err) {
    dispatch({
      type: ADD_HELP_REQUEST_FAILURE,
      payload: err.message,
    });
  }
}

export const getHelpRequests = filters => async dispatch => {
  console.log("hi from get");
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