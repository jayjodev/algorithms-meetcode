import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root'
import App from './components/App';
import Main from './components/Main';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Solution from './components/Solution';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Main} />
                <Route path="/signup" component={Signup} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
                <Route path="/solution" component={Solution} />
            </App>
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
)