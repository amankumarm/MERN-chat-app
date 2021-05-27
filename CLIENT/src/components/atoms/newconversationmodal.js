import React, { useState } from 'react'
import { Form,Modal,Button } from "react-bootstrap";
import { UseContacts } from '../contexts/contactsProvider';
import { UseConversations } from '../contexts/ConversationProvider';

function Newconversationmodal({closeModal}) {
    const [selecedContactIds,setSelectedContactIds] = useState([])
    const {contacts}=UseContacts()
    const { createConversation } = UseConversations()


function submithandler(e){
e.preventDefault()
createConversation(selecedContactIds)
closeModal()
}


function handlecheckboxchange(contactsid){
    setSelectedContactIds(prev=>{
        if(prev.includes(contactsid)){
            return prev.filter(previd=>{
                return contactsid!==previd
            })
        }
        else{
            return [...prev,contactsid]
        }
    })

}


    return (
        <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
            <Form onSubmit={submithandler}>
            {
                contacts.map(item=>(
                    <Form.Group controlId={item.id} key={item.id}>
                        <Form.Check 
                        type="checkbox"
                        value={selecedContactIds.includes(item.id)}
                        label={item.name}
                        onChange={()=>handlecheckboxchange(item.id)}
                        ></Form.Check>

                    </Form.Group>
                ))
            }
            </Form>
            <Button type="submit" onClick={submithandler}>Create Contact</Button>
        </Modal.Body>
        </>
    )
}

export default Newconversationmodal
