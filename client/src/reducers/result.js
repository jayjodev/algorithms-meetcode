import { SERVER_ERROR, USER_INPUT, RESULT_PRIMES, RESULT_MEDIAN_PRIMES, USER_INPUT_VALIDATION } from '../actions/types';
const INITIAL_STATE = {
    result_median_primes: '',
    result_primes: '',
    user_input: '',
    server_error: '',
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_INPUT:
            return { ...state, user_input: action.payload };
        case RESULT_PRIMES:
            return { ...state, result_primes: action.payload };
        case RESULT_MEDIAN_PRIMES:
            return { ...state, result_median_primes: action.payload };
        case SERVER_ERROR:
            return { ...state, server_error: action.payload };
        default:
            return state;
    }
}