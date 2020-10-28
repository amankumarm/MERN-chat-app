import React from 'react'
import { UseContacts } from '../contexts/contactsProvider'
import { ListGroup } from 'react-bootstrap'
function Contacts() {
    const { contacts } =UseContacts()
    if(contacts){
        return (
           
        <div>
        {
            contacts.map((item,index)=>(
            <div key={index}> 
                    {item.name} 
            </div>
            ))
        }
    </div>
                    
        )
    }
    else{
        console.log('cts',contacts)
        return(
        <div>
            dost bana gaandu!!
        </div>
        )
        
    }
}

export default Contacts
