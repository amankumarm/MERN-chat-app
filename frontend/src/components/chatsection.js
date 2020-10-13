import React, { Component } from 'react'
import socketIOClient from "socket.io-client";
import Messages from '../../../models/messages'
import axios from "axios";

//your idea fucked up
//https://medium.com/signature-networks/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5

const socket=socketIOClient('http://localhost:5000/')
class Chatsection  extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            inputcontent:'',
            previnputcontent:'',
            endpoint:'http://localhost:5000/',
            messages:["aman","kumar","dhanu"],
            entering:this.props.enteringroomid
        }

        this.socket=socketIOClient(this.state.endpoint)
        
    }

componentDidUpdate(prevprops,prevstates){
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
        const socket=socketIOClient(this.state.endpoint)
        socket.emit('ms',this.state.inputcontent)
        // if(this.state.inputcontent!=this.state.previnputcontent){
        //     var a = document.getElementsByClassName('chatcontainer')[0]
        //     var newitem= document.createElement("div")
        //     newitem.innerText=this.state.inputcontent
        //     a.appendChild(newitem)
        // }
     
    }

    
    changehandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            previnputcontent:this.state.inputcontent
        })
    }

    render() {
        const allmessages=this.state.messages.map((item) => <p>{item}</p>)

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
