import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contacts:["Aman Kumar M","Dhanush Patel","Akanksha Akkihal","Shivukumar H","Voshwanath Reddy","Varun Singh","T S Shashank"]
        }
    }
    
    
    render() {
        return (
            <div className="usercards mitem">
                {
                    this.state.contacts.map(item => <div className="user_card">{item}</div>)
                }
            </div>
        )
    }
}

export default Sidebar
