import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contacts:["Aman Kumar M","Shivukumar H","Voshwanath Reddy","Varun Singh","T S Shashank"]
        }
        
    }
    
    enteringroom=(e)=>{
        var a = e.target.getAttribute('name')
        console.log(a)

    }
    
    

    render() {
        return (
            <div className="usercards mitem">
                {
                    this.state.contacts.map((item,index) => <div className="user_card" name={index} onClick={this.enteringroom}>{item}</div>)
                }
            </div>
        )
    }
}

export default Sidebar
