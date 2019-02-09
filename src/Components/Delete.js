import React from 'react'


let Delete = () => {

    return(
        <div>
            <button onClick={() => this.props.deleteFn(this.props.id)}>Delete</button>
        </div>
    )
}

export default Delete