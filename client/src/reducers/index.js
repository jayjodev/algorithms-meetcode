import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import result from './result';

export default combineReducers({
    auth: auth,
    result: result,
    form: formReducer
});