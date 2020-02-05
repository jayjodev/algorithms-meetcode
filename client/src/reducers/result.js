import { RESULT, RESULT_ERROR } from '../actions/types';
const INITIAL_STATE = {
    result: { userInput: '', primes: '', medianPrime: ''},
    error_message: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESULT:
            return { ...state, result: action.payload };
        case RESULT_ERROR:
            return { ...state, error_message: action.payload };
        default:
            return state;
    }
}