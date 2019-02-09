import React, { Component } from 'react'
import Edit from './Edit'
import Delete from './Delete'

export default class DisplayFields extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        const displayDirectory = this.props.directory.map(entry => {
            return (
                <div className="text-container" key={entry.id} style={{border:"1px solid black"}}>
                    {<Edit updateFn={this.props.updateFn} entry={entry}/>}
                    {<Delete id={entry.id} deleteFn={this.props.deleteFn} />}
                    <h3>{entry.firstName} {entry.lastName}</h3>
                    <p>{entry.address}</p>
                    <p>{entry.phone}</p>
                    <p>{entry.email}</p>
                </div>
            )
        })
        return(
            <div>
                {displayDirectory}
            </div>
        )
    }
}