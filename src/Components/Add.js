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
        return (
            <div>
                <input name="firstName" onChange={this.handleUserInput} placeholder="First name"/>
                <input name="lastName" onChange={this.handleUserInput} placeholder="Last name"/>
                <input name="address" onChange={this.handleUserInput} placeholder="Address"/>
                <input name="phone" onChange={this.handleUserInput} placeholder="Phone"/>
                <input name="email" onChange={this.handleUserInput} placeholder="Email"/>
                <button onClick={this.handleAddInput}>Add</button>
            </div>
        )
    }

}