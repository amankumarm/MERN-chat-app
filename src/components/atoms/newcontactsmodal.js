import React,{useRef} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
function Newcontactsmodal({closemodal}) {                       //fetch all contacts
    const idref=useRef()
    const nameref=useRef()
    
function submithandler(e){
e.preventDefault()
closemodal()

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
            <Button type="submit">Create Contact</Button>
        </Modal.Body>
        </>
    )
}

export default Newcontactsmodal
