import React from 'react'
import { UseContacts } from '../contexts/contactsProvider'
import { ListGroup } from 'react-bootstrap'
function Contacts({id}) {
    const { contacts } =UseContacts()

        return (
        <ListGroup>
            {
                contacts.map((item,index)=>(
                    <ListGroup.Item key={index}>
                        {item.name}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
                    
        )
    
}

export default Contacts
