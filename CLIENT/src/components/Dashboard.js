import React from 'react'
import { UseConversations } from './contexts/ConversationProvider'
import OpenConversation from './molecules/OpenConversation'
import Sidebar from './molecules/sidebar'

function Dashboard({ id }) {
    const {selectedConversation}=UseConversations()    
    return (
        <div className="d-flex" style={{height:'100vh'}}>
            <Sidebar id={id}/>
            {selectedConversation && <OpenConversation />   }
        </div>
    )
}

export default Dashboard
