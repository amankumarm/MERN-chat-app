import React,{useState,useEffect,useRef} from 'react'
import {Form, InputGroup,Button} from 'react-bootstrap'
import { UseConversations } from '../contexts/ConversationProvider'
function OpenConversation() {
        const [text,setText]=useState("")
        const {sendMessage,selectedConversation}=UseConversations()
        const lastmessageref=useRef();
    
        useEffect(()=>{
            if (lastmessageref.current) {
                lastmessageref.current.scrollIntoView({smooth:true})
            }
        })
    
    
    function handleSubmit(e){
        e.preventDefault()
        sendMessage(
        selectedConversation.recipients.map(r=>r.id),
        text
        )
        setText(' ')
    }


        return (
        <div className='d-flex flex-column flex-grow-1'>
            <div className="flex-grow-1 overflow-auto">
                <div className="d-flex flex-column align-items-start justify-content-end px-3" >
                    {
                        selectedConversation.messages.map((message,index)=>{
                            const lastmessage=selectedConversation.messages.length - 1===index
                            return (
                                <div 
                                key={index}
                                ref={lastmessageref ? lastmessageref :null}
                                className={`my-1 d-flex flex-column ${message.fromme ? 'align-self-end align-items-end':'align-items-start'}`}
                                >
                                    <div 
                                    className={`rounded px-2 py-1 ${message.fromme ? 'bg-primary text-white' : 'border'} `}>
                                        {message.text}
                                    </div>
                                    <div className={`text-muted small ${message.fromme ? 'text-right': ''}`}>
                                    {message.fromme ? 'You' : message.senderName}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <InputGroup>
                        <Form.Control
                        as='textarea' 
                        required 
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        style={{height:'75px',resize:"none"}}
                         />
                    <InputGroup.Append>
                    <Button type="submit">Send</Button> 
                    </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}

export default OpenConversation
