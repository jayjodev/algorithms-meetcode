import resultReducer from '../result';
import { USER_INPUT, RESULT_PRIMES, RESULT_MEDIAN_PRIMES, SERVER_ERROR } from '../../actions/types';

/**
 *  Test result reducer: action type [USER_INPUT, RESULT_PRIMES, RESULT_MEDIAN_PRIMES, SERVER_ERROR]
 */

it('handles actions of type USER_INPUT', () => {
    const action = {
        type: USER_INPUT,
        payload: 7
    };
    const newState = resultReducer('', action)
    expect(newState).toEqual({ "user_input": 7 });
});

it('handles actions of type RESULT_PRIMES', () => {
    const action = {
        type: RESULT_PRIMES,
        payload: [2, 3, 5, 7]
    };
    const newState = resultReducer('', action)
    expect(newState).toEqual({ "result_primes": [2, 3, 5, 7] });
});

it('handles actions of type SERVER_ERROR', () => {
    const action = {
        type: SERVER_ERROR,
        payload: "Server Error"
    };
    const newState = resultReducer('', action)
    expect(newState).toEqual({ "server_error": "Server Error" });
});

it('handles actions of type RESULT_MEDIAN_PRIMES', () => {
    const action = {
        type: RESULT_MEDIAN_PRIMES,
        payload: [3, 5]
    };
    const newState = resultReducer('', action)
    expect(newState).toEqual({ "result_median_primes": [3, 5] });
});

it('handles action with UNKNOWN type', () => {
    const action = {
        type: 'unknown',
        payload: 'unknown'
    };
    const newState = resultReducer('', action)
    expect(newState).toEqual('');
})