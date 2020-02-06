import authReducer from '../auth';
import { AUTH_USER, AUTH_ERROR } from '../../actions/types';

/**
 *  Test auth reducer: action type [AUTH_USER, AUTH_ERROR] 
 */

it('handles actions of type AUTH_USER', () => {
    const action = {
        type: AUTH_USER,
        payload: 'token_sample'
    };
    const newState = authReducer('', action)
    expect(newState).toEqual({ "authenticated": 'token_sample' });
});

it('handles actions of type AUTH_ERROR', () => {
    const action = {
        type: AUTH_ERROR,
        payload: 'Email in use'
    };
    const newState = authReducer('', action)
    expect(newState).toEqual({ "errorMessage": 'Email in use' });
});

it('handles action with UNKNOWN type', () => {
    const action = {
        type: 'unknown',
        payload: 'unknown'
    };
    const newState = authReducer('', action)
    expect(newState).toEqual('');
})