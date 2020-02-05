import React, { Component } from 'react'
import requireAuth from './requreAuth';

class Solution extends Component {
    render(){
        return <div>This is the solution</div>
    }
}

export default requireAuth(Solution);