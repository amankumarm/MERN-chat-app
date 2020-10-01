import React, { Component } from 'react'
import axios from "axios";
import keys from "../../../keys";
import Chatsection from './chatsection';
class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state={
            contacts:[],
            roomid:""
        }
    }
    
    componentDidMount(){
        axios.get(`/profile/getuserinfo`)
        .then(res=>{
            const usrobj=res.data
            this.setState({
                contacts:usrobj.contacts
            })
        })
        .catch(err=>console.log(err))
        
        //fetch all contacts
    }

    enteringroom=(e)=>{
        var goinginid = e.target.getAttribute('name')
        // console.log(goingini d)
        this.setState({
            roomid:goinginid
        })             
    }
    
    

    render() {
        return (
            <>
            <div className="usercards mitem">
                {
                    this.state.contacts.map((item,index) => <div className="user_card" name={Object.values(this.state.contacts[index])[0]} onClick={this.enteringroom}>{Object.keys(this.state.contacts[index])[0]}</div>)
                }
            </div>
             <Chatsection enteringroomid={this.state.roomid} />
             </>
        )
    }
}

export default Sidebar
