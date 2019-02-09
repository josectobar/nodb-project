import React, { Component } from 'react'

export default class Add extends Component {


    render() {
        return (
            <div>
                <input name="firstName" placeholder="First name"/>
                <input name="lastName" placeholder="Last name"/>
                <input name="address" placeholder="Address"/>
                <input name="phone" placeholder="Phone"/>
                <input name="email" placeholder="Email"/>
                <button>Add</button>
            </div>
        )
    }

}