import React, { Component } from 'react'
import '../componentstyles/app.css'
class tem extends Component {
    componentDidMount(){
       var socket=io('http://localhost:5000/test')
       socket.emit('joined',123456)
    }
    render() {
        return (
            <div>
                <div class='outermain'>
                <div class='chatcontainer'></div>
                <div class="outer"></div>
                <input class="item input" /><span><button class="item button">Send</button></span>
    </div>
            </div>
        )
    }
}

export default tem
