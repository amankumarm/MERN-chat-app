import React from 'react'
import {ListGroup} from 'react-bootstrap'
import { UseConversations } from '../contexts/ConversationProvider'

function Conversations() {
    const {conversations,setselectConversationIndex} = UseConversations()
    
    return (
     <ListGroup variant="flush">
         {
             conversations.map((conversations, index)=>(
                 <ListGroup.Item key={index}
                    action
                    active={conversations.selected}
                    onClick={()=> setselectConversationIndex(index)}>
                     {
                         conversations.recipients.map(r=>r.name).join(' , ')
                     }
                 </ListGroup.Item>
             ))
            }
     </ListGroup>   
    )
}

export default Conversations
