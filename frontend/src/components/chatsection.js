import React, { Component } from 'react'


class Chatsection  extends Component {
    render() {
        return (
            <div className="chat_outer mitem">
              <input className='msg_input chatitem' />
              <button className='msg_button chatitem'>Send</button>                  
            </div>
        )
    } 
}

export default Chatsection
