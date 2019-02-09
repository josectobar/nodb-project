import React, { Component } from 'react'

const defaultState = {
    firstName: ``,
    lastName: ``,
    phone:``,
    address:``,
    email:``
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