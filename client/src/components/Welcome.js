import React from 'react';
import Primenumber from './algorithm/Primenumber';

export default () => {
    return (
        <div>
            <h3>Median prime number Calculator</h3>
            <p>Number should be between 2 to 10,000 </p>
            <Primenumber />
            <br />
            <p>Example a) If n = 10, the set of prime numbers less than 10 is [2,3,5,7], and so the medians are [3,5]</p>
            <h4>Do you want to get the solution?</h4>
            <p>SignIn with Id and password below or SignUp</p>
            <p>id: shopthing@shopthing.com</p>
            <p>password: password</p>
            <p>Jay Gangrae Jo</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Copyright © 2020 - All rights Reserved.</p>
            </div>
        </div>
    )
};