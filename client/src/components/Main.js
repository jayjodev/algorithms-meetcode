import React from 'react';
import Primenumber from './algorithm/Primenumber';

export default () => {
    return (
        <div>
            <h3>Median prime number Calculator</h3>
            <p>
                Example a) If n = 10, the set of prime numbers less than 10 is [2,3,5,7], and so the medians are [3,5]
            </p>
            <Primenumber />
            <p>
                <b>Do you need the solution?</b><br />
                Id: shopthing@shopthing.com<br />
                Password: password<br />
                Design by Jay Gangrae Jo
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Copyright © 2020 All rights Reserved.</p>
            </div>
        </div>
    )
};