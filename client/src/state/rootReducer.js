import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { helpRequestReducer } from './helpRequest';


const rootReducer = combineReducers({
  auth: authReducer,
  helpRequest: helpRequestReducer,
});

export default rootReducer;