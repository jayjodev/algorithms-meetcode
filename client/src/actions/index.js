import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, SERVER_ERROR, USER_INPUT, RESULT_PRIMES, RESULT_MEDIAN_PRIMES } from './types';

// { email, password }
export const signup = (formProps, callback) => async dispath => {
    try {
        const response = await axios.post('http://localhost:3001/signup',
            formProps
        );
        dispath({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    }
    catch (e) {
        dispath({ type: AUTH_ERROR, payload: 'Email in use' })
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
};

export const signin = (formProps, callback) => async dispath => {
    try {
        const response = await axios.post('http://localhost:3001/signin',
            formProps
        );
        dispath({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    }
    catch (e) {
        dispath({ type: AUTH_ERROR, payload: 'Invalid login credentials' })
    }
};

export const calculation = (formProps, callback) => async dispath => {
    try {
        const response = await axios.post('http://localhost:3001/algorithm',
            formProps
        );
        if (response.data.userInput && response.data.primes && response.data.medianPrime ){
            dispath({ type: USER_INPUT, payload: response.data.userInput});
            dispath({ type: RESULT_PRIMES, payload: response.data.primes});
            dispath({ type: RESULT_MEDIAN_PRIMES, payload: response.data.medianPrime});
        }
        else {
            dispath({ type: RESULT_MEDIAN_PRIMES, payload: response.data});
        }
        callback();
    }
    catch (e) {
        dispath({ type: SERVER_ERROR, payload: 'Server Error, result is not calculated.' })
    }
};