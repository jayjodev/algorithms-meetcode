import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, RESULT, RESULT_ERROR } from './types';

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
        dispath({ type: RESULT, payload: response.data});
        localStorage.setItem('result', response.data);
        callback();
    }
    catch (e) {
        dispath({ type: RESULT_ERROR, payload: 'Server Error, result is not calculated.' })
    }
};