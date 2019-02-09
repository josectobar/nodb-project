import React, { Component } from 'react'

export default class Delete extends Component {
    
    render() {
        return(
            <div>
                <button className="delete-btn" onClick={() => this.props.deleteFn(this.props.id)}>Delete</button>
            </div>
        )
    }

}

