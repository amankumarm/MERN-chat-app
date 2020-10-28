import React,{useRef} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
import {  UseContacts } from "../contexts/contactsProvider";
function Newcontactsmodal({closeModal}) {                       //fetch all contacts
    const idref=useRef()
    const nameref=useRef()
    const { createContacts } = UseContacts()
    
function submithandler(e){
e.preventDefault()
createContacts(idref.current.value,nameref.current.value)
closeModal(false)

}

    return (
        <>
        <Modal.Header closeButton>Create Contact</Modal.Header>
        <Modal.Body>
            <Form onSubmit={submithandler}>
                <Form.Group>
                    <Form.Label>
                        Id
                    </Form.Label>
                    <Form.Control type="text" ref={idref} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameref} required />
                </Form.Group>
            </Form>
            <Button type="submit" onClick={submithandler}>Create Contact</Button>
        </Modal.Body>
        </>
    )
}

export default Newcontactsmodal
