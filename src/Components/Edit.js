import React, { Component } from 'react'


export default class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: ``,
            firstName: ``,
            lastName: ``,
            phone:``,
            address:``,
            email:``,
            showEdit: false
        }
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
        const { id, firstName, lastName, phone, address, email } = this.state
        this.props.updateFn({ id, firstName, lastName, phone, address, email })
        this.setState({
            id: ``,
            firstName: ``,
            lastName: ``,
            phone:``,
            address:``,
            email:``,
            showEdit: false
        })
    }

    render(){
        const { firstName, lastName, phone, address, email } = this.state
        return (
            <div>
                <button onClick={this.handleEditMode}>Edit</button>
                {this.state.showEdit &&
                    <div>
                        <input name="firstName" onChange={this.handleUserInput} value={firstName}/>
                        <input name="lastName" onChange={this.handleUserInput} value={lastName}/>
                        <input name="address"onChange={this.handleUserInput} value={address}/>
                        <input name="phone" onChange={this.handleUserInput} value={phone}/>
                        <input name="email" onChange={this.handleUserInput} value={email}/>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                }
            </div>
        )
    }
}