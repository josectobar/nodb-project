import React, { Component } from 'react'


const defaultState = {
    id: ``,
    firstName: ``,
    lastName: ``,
    phone:``,
    address:``,
    email:``,
    showEdit: false
}

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = defaultState
    }

    handleEditMode = () => {
        const { id, firstName, lastName, phone, address, email } = this.props.entry
        this.setState({
            id: id,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            email: email,
            showEdit: !this.state.showEdit
        })
    }

    handleUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        let tempState = Object.values(this.state)
            for (let i = 0 ; i < tempState.length; i++) {
                if ( tempState[i] === '' ) {
                    return alert('Please add all fields')
                }
            } 
        this.props.updateFn(this.state)
        this.setState(defaultState)
    }

    handleNewEntry = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const { firstName, lastName, phone, address, email } = this.state
        return (
            <div>
                <button className="edit-btn" onClick={this.handleEditMode}>Edit</button>
                {this.state.showEdit &&
                    <div className="edit-container">
                        <input className="firstname-edit-input"name="firstName" onChange={this.handleUserInput} placeholder="Firstname" value={firstName}/>
                        <input className="lastname-edit-input" name="lastName" onChange={this.handleUserInput} placeholder="Lastname" value={lastName}/>
                        <input className="address-edit-input"name="address"onChange={this.handleUserInput} placeholder="Address" value={address}/>
                        <input className="phone-edit-input"name="phone" onChange={this.handleUserInput} placeholder="Phone" value={phone}/>
                        <input className="email-edit-input"name="email" onChange={this.handleUserInput} placeholder="Email" value={email}/>
                        <button className="submit-btn" onClick={this.handleSubmit}><strong>Submit</strong></button>
                    </div>
                }
            </div>
        )
    }
}
