import React, { useState } from 'react'
import {Tab,Nav,Button,Modal} from 'react-bootstrap'
import Conv from "../atoms/Conversations"
import Contacts from "../atoms/Contacts"
import NewContactsModal from '../atoms/newcontactsmodal'
import NewConversationModal from '../atoms/newconversationmodal'


const Conversation_Key="Conversation"
const Contacts_Key="Contacts"



function Sidebar({id}) {
    // console.log(id)
    const [activeKey,setactivekey] = useState(Conversation_Key)
    const onconvCick=activeKey===Conversation_Key
    const [modalopen,setmodal]=useState(false)

    function closemodal() {
        setmodal(false)
    }

    return (
        <div style={{width:'250px',height:'100vh'}} className="d-flex flex-column">
            <Tab.Container  activeKey={activeKey} onSelect={setactivekey}> 
                <Nav variant='tabs' className="justify-content-center"> 
                    <Nav.Item>
                        <Nav.Link eventKey={Conversation_Key}>
                            Conversation
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Contacts_Key}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={Conversation_Key}>
                        <Conv />
                    </Tab.Pane>
                    <Tab.Pane eventKey={Contacts_Key}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                
                <div className="p-2 border-top border-right small">
                    Your Id: <span>{id}</span>
                </div>
                <Button onClick={()=>setmodal(true)}className="rounded-0">
                    {onconvCick ? Conversation_Key:Contacts_Key}
                </Button>
            </Tab.Container>
            <Modal show={modalopen} onHide={closemodal}>
                {
                    onconvCick ? <NewConversationModal closeModal={closemodal} /> : <NewContactsModal closeModal={setmodal} />
                }
            </Modal>
        </div>
    )
}

export default Sidebar
