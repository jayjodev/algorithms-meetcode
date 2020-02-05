import React, { Component } from 'react'
import requireAuth from './requreAuth';

class Solution extends Component {
    render(){
        return (<div>
        <div>Solution</div>
        <br/>
        https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
        </div>)
    }
}

export default requireAuth(Solution);