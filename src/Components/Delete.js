import React, { Component } from 'react'

export default class Delete extends Component {
    
    render() {
        return(
            <div>
                <button onClick={() => this.props.deleteFn(this.props.id)}>Delete</button>
            </div>
        )
    }

}

