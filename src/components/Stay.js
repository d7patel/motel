import React, { Component } from 'react'
import CheckIn from './CheckIn';

class Stay extends Component {
  

    render() {
        return (
            <div>
                <h3>Stay over</h3>
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>
        )
    }
}

export default Stay
