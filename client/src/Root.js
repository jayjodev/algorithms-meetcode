import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
export default ({ children }) => {

    const store = createStore(
        reducers,
        {
            auth: { authenticated: localStorage.getItem('token') },
        },
        applyMiddleware(reduxThunk)
    );
    return (
        // Initial starting state for the application.
        <Provider store={store}>
            {children}
        </Provider>
    );
};