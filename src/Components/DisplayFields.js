import React, { Component } from 'react'
import Edit from './Edit'
import Delete from './Delete'
import Add from './Add'

export default class DisplayFields extends Component {

    render(){
        const displayDirectory = this.props.directory.map(entry => {
            return (
                <div className="entry-container" key={entry.id}>
                    {<Edit updateFn={this.props.updateFn} entry={entry}/>}
                    {<Delete id={entry.id} deleteFn={this.props.deleteFn} />}
                    <h3>{entry.firstName} {entry.lastName}</h3>
                    <p>{entry.address}</p>
                    <span>{entry.phone} </span><span> {entry.email}</span>
                </div>
            )
        })
        return(
            <div className="display-container">
                <Add newEntryFn={this.props.newEntryFn}/>
                <div className="text-container">
                {displayDirectory}
                </div>
            </div>
        )
    }
}