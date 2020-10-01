import Axios from 'axios'
import React, { Component } from 'react'
import Messages from '../../../models/messages'
import axios from "axios";

//your idea fucked up
//https://medium.com/signature-networks/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5

class Chatsection  extends Component {
    
    
    componentDidMount(){
        // display some random shit
    }

    componentDidUpdate(prevprops){
        if(this.props.enteringroomid!=prevprops.enteringroomid){
            const { id } = this.props.enteringroomid
            // axios.get(`/messages/${id}`)
            // .then(res=>console.log(res))
            // .catch(err=>console.log(err))
        }
var socket= io('http://localhost:5000/test')

        socket.on('mr',function(data) {
           var chatcont=document.getElementById('chat-container')
            var ele=document.createElement("div")
            ele.innerText=data;
            chatcont.appendChild(ele)

        })    
    }
    
    messagehandler=(e)=>{
        e.preventDefault();
        var socket= io('http://localhost:5000/test')
        socket.emit('ms',this.state.inputcontent)
    }

    
    changehandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (


              <div className="chat_outer mitem" id="chat-container">
              <input className='msg_input chatitem'  name="inputcontent" onChange={this.changehandler} />
              <button className='msg_button chatitem' onClick={this.messagehandler}>Send</button>                  
            </div>
        )
    } 
}

export default Chatsection
