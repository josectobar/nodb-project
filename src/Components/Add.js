import React, { Component } from 'react'

const defaultState = {
    firstName: ``,
    lastName: ``,
    phone:``,
    address:``,
    email:``,
    caseNotes: [{}]
}

export default class Add extends Component {

    constructor(props) {
        super(props)
        this.state = defaultState
    }

    handleUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAddInput = () => {
        let tempState = Object.values(this.state)
            for (let i = 0 ; i < tempState.length; i++) {
                if ( tempState[i] === '' ) {
                    return alert('Please add all fields')
                } 
            }
        this.props.newEntryFn(this.state)
        this.setState(defaultState)
    }

    render() {
        const { firstName, lastName, phone, address, email } = this.state
        return (
            <div className={"add-container"}>
                <input name="firstName" 
                    onChange={this.handleUserInput}
                    value={firstName} 
                    placeholder="First name"
                />
                <input 
                    name="lastName" 
                    onChange={this.handleUserInput}
                    value={lastName}  
                    placeholder="Last name"
                />
                <input 
                    name="address" 
                    onChange={this.handleUserInput} 
                    value={address} 
                    placeholder="Address"
                />
                <input 
                    name="phone" 
                    onChange={this.handleUserInput} 
                    value={phone} 
                    placeholder="Phone"
                />
                <input 
                    name="email" 
                    onChange={this.handleUserInput} 
                    value={email} 
                    placeholder="Email"
                />
                <button  className="add-btn"
                    onClick={this.handleAddInput}>
                    <b>Add</b>
                </button>
            </div>
        )
    }

}