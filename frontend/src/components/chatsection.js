import React, { Component } from 'react'
import socketIOClient from "socket.io-client";
import Messages from '../../../models/messages'
import axios from "axios";

//your idea fucked up
//https://medium.com/signature-networks/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5

var socket;
class Chatsection  extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            inputcontent:'hi aman',
            endpoint:'http://localhost:5000/',
            messages:[],
            entering:this.props.enteringroomid
        }
    }
    
    


    componentDidUpdate(prevprops){
        if(this.props.enteringroomid!=prevprops.enteringroomid){
            const socket=socketIOClient(this.state.endpoint)
            socket.emit('joined',this.props.enteringroomid)
            
            // axios.get(`/messages/${id}`)
            // .then(res=>console.log(res))
            // .catch(err=>console.log(err))
        }
        
           
    }
    messagehandler=(e)=>{
        e.preventDefault();
        const msgs=this.state.messages
        const socket=socketIOClient(this.state.endpoint)
        socket.emit('ms',this.state.inputcontent)
        socket.once('mr',data=>{
            var cc=document.getElementsByClassName('chatcontainer')[0]
            var ele=document.createElement("div")
            ele.innerText=data
            cc.appendChild(ele)
        })
    }

    
    changehandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
               <> 
              <div className="chat_outer mitem" id="chat-container">
                  <div className='chatcontainer chatitem' >
                      
                  </div>
                  <div className="ib chatitem" >
              <input className='msg_input '  name="inputcontent" onChange={this.changehandler} />
              <button className='msg_button ' onClick={this.messagehandler}>Send</button>                  
                  </div>
            </div>
            </>
        )
    } 
}

export default Chatsection
